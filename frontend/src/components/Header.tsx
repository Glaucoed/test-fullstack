import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-uol-header h-24 flex items-center justify-center">
      <Image src="/logo.png" alt="Logotipo Uol" width={100} height={100} />
    </header>
  )
}
