import Image from "next/image"

export const Header = () => {
  return (
    <header className="sticky top-0 w-full h-14 bg-white">
      <div className="w-full max-w-3xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="flex items-center gap-x-4">
          <Image src="/logo.png" alt="Tailwind Contrast Checker" width={32} height={32} />
          Tailwind Contrast Checker
        </h1>
        <a
          href="https://github.com/yuu3/tailwindcss-contrast"
          target="_blank"
        >
          <Image
            src="/github.svg"
            alt="GitHubのロゴ"
            width={32}
            height={32}
          />
        </a>
      </div>
    </header>
  )
}
