"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ParallaxServiceCardProps = {
  number: string;
  title: string;
  text: string;
  image: string;
  delay?: number;
};

export default function ParallaxServiceCard({
  number,
  title,
  text,
  image,
  delay = 0,
}: ParallaxServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <motion.div
            initial={{ scale: 1.12, y: 60, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.2,
              delay: delay + 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: delay + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-sm font-bold text-zinc-950 shadow-sm"
          >
            {number}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: delay + 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
          >
            Service
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: delay + 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-5 left-5 right-5"
          >
            <h3 className="text-2xl font-bold leading-tight text-white">
              {title}
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: delay + 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="p-6"
        >
          <p className="text-sm leading-7 text-zinc-600 md:text-base">
            {text}
          </p>

          <div className="mt-6 h-px w-full bg-zinc-200 transition duration-500 group-hover:bg-red-200" />

          <div className="mt-5">
            <Link
              href="/leistungen"
              className="inline-flex items-center text-sm font-semibold text-red-600 transition hover:text-red-700"
            >
              Mehr erfahren →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}