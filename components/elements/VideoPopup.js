"use client";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { createPortal } from "react-dom";

export default function VideoPopup({ style }) {
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const videoId = "SAQ241JdsGU";

  const modal = isOpen && (
    <div
      className="video-popup-container"
      style={{
        zIndex: 10001,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80vw",
          maxWidth: 800,
          aspectRatio: "16/9",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <iframe
          src="https://www.youtube.com/embed/yHncXenniwI?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 8,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  return (
    <>
      {style === 1 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div>
      )}
      {style === 2 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className="video-buttton video-popup"
          >
            <i className="fa-solid fa-play" />
            <img
              src="/assets/img/about/circle-text.png"
              alt="text-img"
              className="text-circle"
            />
          </a>
        </div>
      )}
      {style === 3 && (
        <span className="button-text wow fadeInUp" data-wow-delay=".9s">
          <a
            onClick={() => setOpen(true)}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
          <span className="ms-4 d-line">About US</span>
        </span>
      )}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
