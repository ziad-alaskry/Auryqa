export default function Footer() {

    return (
      <footer className="relative border-t border-[#C9CCD6]/10 py-16 mt-4">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-[#8E929C]">
          <span>© {new Date().getFullYear()} Auryqa</span>
          <span>Smart living. Designed. Installed. Perfected.</span>
        </div>
      </footer>
    )
}