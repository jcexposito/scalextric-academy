import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "light"
}

export function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonHref,
  variant = "default" 
}: CTASectionProps) {
  const isLight = variant === "light"

  return (
    <section className={`py-20 ${isLight ? "bg-gray-50" : "bg-gray-900"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${isLight ? "text-gray-600" : "text-gray-300"}`}>
            {description}
          </p>
          <Link href={buttonHref}>
            <Button 
              size="lg" 
              className="bg-[#ED1C24] hover:bg-[#C41922] text-white font-semibold gap-2"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
