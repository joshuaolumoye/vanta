import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { X, Image as ImageIcon, Globe } from "lucide-react";

/* ── Types ─────────────────────────────────────────────── */
interface ImageItem {
  id: string;
  original: string; // original object URL / data URL
  display: string;  // current display (possibly cropped)
}

interface CropBox {
  x: number; // % of container
  y: number;
  w: number;
  h: number;
}

type CropHandle = "move" | "nw" | "ne" | "sw" | "se" | null;

interface CropDrag {
  handle: CropHandle;
  startMouseX: number;
  startMouseY: number;
  startBox: CropBox;
}

/* ── Crop grid overlay ─────────────────────────────────── */
const CropOverlay: React.FC<{
  box: CropBox;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onMouseDown: (e: React.MouseEvent, handle: CropHandle) => void;
}> = ({ box, onMouseDown }) => {
  const handleStyle = (pos: { top?: string; bottom?: string; left?: string; right?: string }) => ({
    ...pos,
    width: 12,
    height: 12,
    position: "absolute" as const,
    background: "white",
    borderRadius: 2,
    cursor: "nwse-resize",
    zIndex: 10,
    transform: "translate(-50%, -50%)",
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Dark vignette outside crop box */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.6) ${box.x}%, transparent ${box.x}%),
            linear-gradient(to left,  rgba(0,0,0,0.6) ${100 - box.x - box.w}%, transparent ${100 - box.x - box.w}%),
            linear-gradient(to bottom, rgba(0,0,0,0.6) ${box.y}%, transparent ${box.y}%),
            linear-gradient(to top,   rgba(0,0,0,0.6) ${100 - box.y - box.h}%, transparent ${100 - box.y - box.h}%)
          `,
        }}
      />

      {/* Crop rectangle */}
      <div
        className="absolute border-2 border-white pointer-events-auto cursor-move"
        style={{
          left: `${box.x}%`,
          top: `${box.y}%`,
          width: `${box.w}%`,
          height: `${box.h}%`,
        }}
        onMouseDown={(e) => onMouseDown(e, "move")}
      >
        {/* Rule-of-thirds grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 border-r border-white/25" style={{ left: "33.3%" }} />
          <div className="absolute top-0 bottom-0 border-r border-white/25" style={{ left: "66.6%" }} />
          <div className="absolute left-0 right-0 border-b border-white/25" style={{ top: "33.3%" }} />
          <div className="absolute left-0 right-0 border-b border-white/25" style={{ top: "66.6%" }} />
        </div>

        {/* Corner handles */}
        <div
          style={{ ...handleStyle({ top: "0%", left: "0%" }), cursor: "nw-resize" }}
          onMouseDown={(e) => { e.stopPropagation(); onMouseDown(e, "nw"); }}
        />
        <div
          style={{ ...handleStyle({ top: "0%", right: "0%" }), cursor: "ne-resize", transform: "translate(50%, -50%)" }}
          onMouseDown={(e) => { e.stopPropagation(); onMouseDown(e, "ne"); }}
        />
        <div
          style={{ ...handleStyle({ bottom: "0%", left: "0%" }), cursor: "sw-resize", transform: "translate(-50%, 50%)" }}
          onMouseDown={(e) => { e.stopPropagation(); onMouseDown(e, "sw"); }}
        />
        <div
          style={{ ...handleStyle({ bottom: "0%", right: "0%" }), cursor: "se-resize", transform: "translate(50%, 50%)" }}
          onMouseDown={(e) => { e.stopPropagation(); onMouseDown(e, "se"); }}
        />
      </div>
    </div>
  );
};

/* ── Main component ─────────────────────────────────────── */
interface Props {
  onClose: () => void;
}

const CreatePostModal: React.FC<Props> = ({ onClose }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [cropMode, setCropMode] = useState(false);
  const [cropBox, setCropBox] = useState<CropBox>({ x: 10, y: 10, w: 80, h: 80 });
  const cropDragRef = useRef<CropDrag | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const hasImages = images.length > 0;
  const selectedImage = images[selectedIdx] ?? null;

  /* ── File handling ── */
  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const newItems: ImageItem[] = [];
    Array.from(files).forEach((f) => {
      if (!f.type.startsWith("image/")) return;
      const url = URL.createObjectURL(f);
      newItems.push({ id: `${Date.now()}-${Math.random()}`, original: url, display: url });
    });
    if (!newItems.length) return;
    setImages((prev) => {
      const next = [...prev, ...newItems];
      setSelectedIdx(next.length - 1);
      return next;
    });
  };

  const deleteImage = (idx: number) => {
    setCropMode(false);
    setImages((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      setSelectedIdx(Math.max(0, Math.min(idx, next.length - 1)));
      return next;
    });
  };

  /* ── Crop drag logic ── */
  const startCropDrag = useCallback(
    (e: React.MouseEvent, handle: CropHandle) => {
      e.preventDefault();
      e.stopPropagation();
      const container = imgContainerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      cropDragRef.current = {
        handle,
        startMouseX: ((e.clientX - rect.left) / rect.width) * 100,
        startMouseY: ((e.clientY - rect.top) / rect.height) * 100,
        startBox: { ...cropBox },
      };
    },
    [cropBox]
  );

  useEffect(() => {
    if (!cropMode) return;

    const onMove = (e: MouseEvent) => {
      const drag = cropDragRef.current;
      const container = imgContainerRef.current;
      if (!drag || !container) return;
      const rect = container.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      const dx = mx - drag.startMouseX;
      const dy = my - drag.startMouseY;
      const sc = drag.startBox;
      const MIN = 8;

      let { x, y, w, h } = sc;

      switch (drag.handle) {
        case "move":
          x = Math.max(0, Math.min(100 - w, sc.x + dx));
          y = Math.max(0, Math.min(100 - h, sc.y + dy));
          break;
        case "se":
          w = Math.max(MIN, Math.min(100 - sc.x, sc.w + dx));
          h = Math.max(MIN, Math.min(100 - sc.y, sc.h + dy));
          break;
        case "sw":
          w = Math.max(MIN, sc.w - dx);
          x = Math.min(sc.x + sc.w - MIN, sc.x + dx);
          h = Math.max(MIN, Math.min(100 - sc.y, sc.h + dy));
          break;
        case "ne":
          w = Math.max(MIN, Math.min(100 - sc.x, sc.w + dx));
          h = Math.max(MIN, sc.h - dy);
          y = Math.min(sc.y + sc.h - MIN, sc.y + dy);
          break;
        case "nw":
          w = Math.max(MIN, sc.w - dx);
          x = Math.min(sc.x + sc.w - MIN, sc.x + dx);
          h = Math.max(MIN, sc.h - dy);
          y = Math.min(sc.y + sc.h - MIN, sc.y + dy);
          break;
      }

      setCropBox({ x, y, w, h });
    };

    const onUp = () => { cropDragRef.current = null; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [cropMode]);

  /* ── Apply crop ── */
  const applyCrop = useCallback(() => {
    const container = imgContainerRef.current;
    if (!container || !selectedImage) return;

    const imgEl = container.querySelector("img") as HTMLImageElement;
    if (!imgEl || !imgEl.complete) return;

    const containerRect = container.getBoundingClientRect();
    const imgRect = imgEl.getBoundingClientRect();

    // Offset of rendered image inside container (fractions)
    const offX = (imgRect.left - containerRect.left) / containerRect.width;
    const offY = (imgRect.top - containerRect.top) / containerRect.height;
    const scaleX = imgRect.width / containerRect.width;
    const scaleY = imgRect.height / containerRect.height;

    // Convert crop box (% of container) to fraction of natural image
    const cx = (cropBox.x / 100 - offX) / scaleX;
    const cy = (cropBox.y / 100 - offY) / scaleY;
    const cw = (cropBox.w / 100) / scaleX;
    const ch = (cropBox.h / 100) / scaleY;

    const nw = imgEl.naturalWidth;
    const nh = imgEl.naturalHeight;

    const px = Math.max(0, cx * nw);
    const py = Math.max(0, cy * nh);
    const pw = Math.min(nw - px, cw * nw);
    const ph = Math.min(nh - py, ch * nh);

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(pw);
    canvas.height = Math.round(ph);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(imgEl, px, py, pw, ph, 0, 0, canvas.width, canvas.height);

    const cropped = canvas.toDataURL("image/jpeg", 0.93);
    setImages((prev) =>
      prev.map((item, i) =>
        i === selectedIdx ? { ...item, display: cropped } : item
      )
    );
    setCropMode(false);
  }, [cropBox, selectedImage, selectedIdx]);

  /* ── Drag-and-drop upload ── */
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  /* ── Submit ── */
  const handlePost = () => {
    onClose();
  };

  /* ── Shared author header ── */
  const AuthorHeader = (
    <div className="flex items-center justify-between p-4 pb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
          <img
            src="/avatar.png"
            alt="You"
            className="w-full h-full object-cover"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-none">Joseph Frank</p>
          <p className="text-gray-500 text-[11px] mt-0.5">@josephjuice009</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-[#2a2a45] flex items-center justify-center text-gray-400 hover:text-white transition"
      >
        <X size={16} />
      </button>
    </div>
  );

  /* ── Footer bar ── */
  const FooterBar = (
    <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
      <div className="flex items-center gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition shadow-md"
        >
          <ImageIcon size={15} className="text-white" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#2a2a45] flex items-center justify-center hover:bg-[#3a3a5a] transition">
          <Globe size={15} className="text-white" />
        </button>
      </div>
      <button
        onClick={handlePost}
        className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-6 py-2 rounded-full transition"
      >
        Post
      </button>
    </div>
  );

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md px-0 sm:px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* ── NO IMAGE: compact card ── */}
        {!hasImages && (
          <div
            className="w-full sm:max-w-md bg-[#191930] rounded-t-3xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {AuthorHeader}

            <div className="px-4 pb-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What are you feeling today gang...."
                className="w-full bg-transparent text-gray-300 text-sm placeholder-gray-600 outline-none resize-none min-h-[90px]"
                rows={4}
                autoFocus
              />
            </div>

            {FooterBar}
          </div>
        )}

        {/* ── HAS IMAGES: split layout ── */}
        {hasImages && (
          <div
            className="w-full sm:max-w-3xl bg-[#191930] rounded-t-3xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            style={{ maxHeight: "92vh" }}
          >
            {/* ── LEFT: image preview — 50% on desktop ── */}
            <div
              ref={imgContainerRef}
              className="relative bg-black flex-shrink-0 flex items-center justify-center overflow-hidden md:w-1/2"
              style={{ height: "clamp(220px, 45vw, 480px)" }}
            >
              {/* Displayed image */}
              <img
                src={selectedImage?.display || selectedImage?.original}
                alt=""
                className="w-full h-full"
                style={{ objectFit: cropMode ? "contain" : "cover", userSelect: "none", pointerEvents: "none" }}
                draggable={false}
              />

              {/* ── Normal mode: top controls ── */}
              {!cropMode && (
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    {selectedIdx + 1}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setCropBox({ x: 10, y: 10, w: 80, h: 80 });
                        setCropMode(true);
                      }}
                      className="bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-black/80 transition"
                    >
                      Crop
                    </button>
                    <button
                      onClick={() => deleteImage(selectedIdx)}
                      className="bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-red-500/80 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {/* ── Crop mode overlay ── */}
              {cropMode && (
                <>
                  <CropOverlay
                    box={cropBox}
                    containerRef={imgContainerRef}
                    onMouseDown={startCropDrag}
                  />
                  {/* Crop action buttons */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
                    <button
                      onClick={() => setCropMode(false)}
                      className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-black/90 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={applyCrop}
                      className="bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-blue-400 transition shadow-lg"
                    >
                      Apply Crop
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* ── RIGHT: form — 50% on desktop ── */}
            <div className="flex flex-col md:w-1/2 md:flex-shrink-0 min-w-0">
              {AuthorHeader}

              {/* Text area */}
              <div className="flex-1 px-4 overflow-y-auto min-h-[60px]">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What are you feeling today gang...."
                  className="w-full bg-transparent text-gray-300 text-sm placeholder-gray-600 outline-none resize-none pt-1"
                  rows={3}
                  autoFocus
                />
              </div>

              {/* Image thumbnails row */}
              <div className="px-4 pb-3">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {/* "Add more" button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-14 h-14 rounded-xl bg-[#2a2a45] flex items-center justify-center flex-shrink-0 hover:bg-[#3a3a5a] transition border border-white/10"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </button>

                  {/* Image thumbs */}
                  {images.slice(0, 4).map((img, i) => (
                    <div
                      key={img.id}
                      onClick={() => { setSelectedIdx(i); setCropMode(false); }}
                      className={`relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition border-2 ${
                        i === selectedIdx ? "border-blue-400 ring-1 ring-blue-400/40" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img.display} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}

                  {/* Overflow badge */}
                  {images.length > 4 && (
                    <div className="w-14 h-14 rounded-xl bg-[#2a2a45] flex items-center justify-center flex-shrink-0 border border-white/10">
                      <span className="text-white text-xs font-bold">+{images.length - 4}</span>
                    </div>
                  )}
                </div>
              </div>

              {FooterBar}
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
          // Reset value so same file can be re-selected
          onClick={(e) => ((e.target as HTMLInputElement).value = "")}
        />
      </div>
    </>
  );
};

export default CreatePostModal;