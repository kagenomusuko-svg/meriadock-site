import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Slider simple que consume /api/slider-mock.
 * Más adelante conectar a Supabase para datos dinámicos.
 */
export default function Slider() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("/api/slider-mock");
        setItems(res.data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(t);
  }, [items]);

  if (!items.length) {
    return <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">Cargando slider...</div>;
  }

  const item = items[index];

  return (
    <div className="relative rounded-md overflow-hidden shadow-md">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm">{item.subtitle}</p>
      </div>
    </div>
  );
}