import React, { useState, useEffect } from "react";
import rgbHex from "rgb-hex";
import CopyToClipboard from "react-copy-to-clipboard";

function generate_color() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color_property = {
    color: "rgb(" + r + "," + g + "," + b + ")",
    brightness: (r * 299 + g * 587 + b * 114) / 1000,
  };

  return color_property;
}

export default function Colors() {
  const color = generate_color();
  const isDarkBackground = color.brightness < 128;
  const newTextColor = isDarkBackground ? "white" : "black";
  const colorHex = rgbHex(color.color).toUpperCase();
  return (
    <div
      style={{ backgroundColor: color.color }}
      className={
        "flex gap-6 sm:p-7 p-6 justify-end dmsans font-light text-3xl playfair text-" + newTextColor
      }
    >
      <span>{colorHex}</span>
      <CopyToClipboard
        text={"#" + colorHex}
        onCopy={(colorHex, result) => console.log(result)}
      >
        <button class={"bg-transparent text-xs font-light py-2 px-4 active:translate-x-0.5 active:translate-y-0.5 transition duration-500 border rounded-xl shadow border-" + newTextColor}>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
}
