import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/NM_logo-02.png?height=32&width=32"
              alt="Matcha Cafe Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-[#72462d]">Nigocha Matcha</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-[#72462d] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#72462d] transition-colors">
              About
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-[#72462d] transition-colors">
              Products
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#72462d] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#72462d] hover:bg-[#5d3a25] text-white">Order Online</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[70vh] bg-[#F5F2EA] flex items-center">
            <div className="container grid gap-4 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#72462d]">
                  Experience the <span className="text-[#72462d]">Serenity</span> of Matcha
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  Discover our premium matcha products, handcrafted with care and tradition for a moment of calm in your
                  day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#72462d] hover:bg-[#5d3a25] text-white">Shop Products</Button>
                  <Button variant="outline" className="border-[#72462d] text-[#72462d]">
                    Visit Cafe
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-[400px]">
                <Image
                  src="/assets/IMG_8321.JPG?height=400&width=500"
                  alt="Matcha Tea"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#72462d]">Our Story</h2>
              <p className="text-muted-foreground">
                Nigocha Matcha was born from a passion for authentic Japanese tea culture and a desire to share the
                calming ritual of matcha preparation with our community. We source only the finest matcha directly from
                small farms in Japan, ensuring exceptional quality and flavor in every cup and product.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-[#F5F2EA] p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#72462d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#72462d]">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Our matcha is ceremonial grade, sourced directly from Uji, Japan.
                </p>
              </div>

              <div className="bg-[#F5F2EA] p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#72462d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#72462d]">Sustainable Practices</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize eco-friendly packaging and ethical sourcing in all we do.
                </p>
              </div>

              <div className="bg-[#F5F2EA] p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#72462d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#72462d]">Handcrafted Care</h3>
                <p className="text-sm text-muted-foreground">
                  Each product is prepared with attention to detail and traditional methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-[#F5F2EA]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-[#72462d]">Our Products</h2>
              <p className="text-muted-foreground">
                Explore our selection of premium matcha products, perfect for enjoying at home or giving as a thoughtful
                gift.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#72462d]">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-[#72462d]">${product.price}</span>
                      <Button size="sm" className="bg-[#72462d] hover:bg-[#5d3a25] text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#72462d] hover:bg-[#5d3a25] text-white">View All Products</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#72462d] mb-6">Visit Our Cafe</h2>
                <p className="text-muted-foreground mb-8">
                  Experience the tranquility of our matcha cafe in person. Enjoy freshly prepared matcha drinks and
                  treats in our serene space.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#72462d]" />
                    <span>123 Serenity Lane, Green District, CA 94123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#72462d]" />
                    <span>Mon-Fri: 8am-6pm | Sat-Sun: 9am-5pm</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#72462d] hover:bg-[#E5E2DA] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#72462d] hover:bg-[#E5E2DA] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#72462d] hover:bg-[#E5E2DA] transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/IMG_8320.JPG?height=400&width=500"
                  alt="Matcha Cafe Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#72462d] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Matcha Cafe Logo"
                  width={32}
                  height={32}
                  className="rounded-full bg-white"
                />
                <span className="text-xl font-semibold">Nigocha Matcha</span>
              </div>
              <p className="text-sm text-[#D1D9CD]">
                Bringing the serenity and tradition of Japanese matcha to your everyday life.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#D1D9CD]">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-[#D1D9CD]">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Matcha Powder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Matcha Kits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-[#D1D9CD] mb-4">
                Subscribe to receive updates on new products and special offers.
              </p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-black text-sm flex-1" />
                <Button size="sm" className="bg-[#8b5638] hover:bg-[#72462d] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8b5638] mt-8 pt-8 text-center text-sm text-[#D1D9CD]">
            <p>© {new Date().getFullYear()} Nigocha Matcha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample product data
const products = [
  {
    id: 1,
    name: "Ceremonial Grade Matcha",
    description: "Premium first harvest matcha powder for traditional preparation.",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Matcha Starter Kit",
    description: "Everything you need to begin your matcha journey at home.",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Bamboo Whisk (Chasen)",
    description: "Traditional bamboo whisk for perfect matcha preparation.",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Matcha Gift Set",
    description: "Elegant gift box with premium matcha and accessories.",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

