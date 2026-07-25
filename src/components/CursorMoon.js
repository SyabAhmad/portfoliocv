import { useEffect } from "react";

const SWAP_MS = 3000;

const CursorMoon = () => {
 useEffect(() => {
 const body = document.body;
 let isFull = true;

 body.classList.add("moon-full");

 const interval = setInterval(() => {
 isFull = !isFull;
 body.classList.toggle("moon-full", isFull);
 body.classList.toggle("moon-new", !isFull);
 }, SWAP_MS);

 return () => {
 clearInterval(interval);
 body.classList.remove("moon-full", "moon-new");
 };
 }, []);

 return null;
};

export default CursorMoon;
