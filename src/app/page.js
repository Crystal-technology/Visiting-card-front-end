import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Star, Zap, Layers, PenTool, Smartphone, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  Professional Digital Presence
                </span>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                  Create Stunning Digital Visiting Cards in Minutes
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  Design, customize, and share your professional digital visiting card. Stand out from the crowd with
                  interactive elements and seamless sharing options.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow hover:bg-blue-700"
                >
                  Create Your Card <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100"
                >
                  View Templates
                </Link>
              </div>
            </div>
            <Image
              src="https://cdn.shopify.com/s/files/1/0610/3901/8062/files/Gemini_Generated_Image_762fp6762fp6762f.jpg?v=1741446756"
              width={800}
              height={600}
              alt="Digital visiting card examples"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>  

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mx-auto">
                Features
              </span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Everything You Need</h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg">
                Our platform offers all the tools you need to create professional digital visiting cards that leave a
                lasting impression.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                icon: <PenTool className="h-8 w-8 text-blue-600" />,
                title: "Intuitive Designer",
                description:
                  "Easy-to-use drag and drop interface to create your perfect card without any design skills.",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-blue-600" />,
                title: "Mobile Optimized",
                description: "Your cards look perfect on any device, ensuring a seamless experience for everyone.",
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "Instant Sharing",
                description: "Share your digital card via QR code, link, or directly through social media platforms.",
              },
              {
                icon: <Layers className="h-8 w-8 text-blue-600" />,
                title: "Premium Templates",
                description: "Choose from hundreds of professionally designed templates for any industry.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
                title: "Analytics",
                description: "Track views and interactions with your card to measure its effectiveness.",
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: "Custom Branding",
                description: "Add your logo, brand colors, and custom fonts to maintain brand consistency.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-4 text-center"
              >
                {feature.icon}
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mx-auto">
                Simple Process
              </span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg">
                Create your digital visiting card in three simple steps and start sharing it with the world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                step: "01",
                title: "Choose a Template",
                description:
                  "Browse our collection of professionally designed templates and select one that matches your style.",
              },
              {
                step: "02",
                title: "Customize Your Card",
                description: "Add your information, upload photos, customize colors, and make it uniquely yours.",
              },
              {
                step: "03",
                title: "Share with the World",
                description:
                  "Generate a QR code, get a shareable link, or download your card to share with your network.",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-500 text-center text-sm">{step.description}</p>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] h-[2px] w-16 bg-gray-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Start Creating Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mx-auto">
                Pricing
              </span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Choose Your Plan</h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg">
                We offer flexible plans to meet your needs, from free basic cards to premium business solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              {
                title: "Basic",
                price: "Free",
                description: "Perfect for individuals just getting started",
                features: [
                  "1 Digital Card",
                  "Basic Templates",
                  "Standard Sharing Options",
                  "Basic Analytics",
                  "CardCraft Branding",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                title: "Professional",
                price: "$9.99",
                period: "/month",
                description: "Ideal for professionals and small businesses",
                features: [
                  "5 Digital Cards",
                  "Premium Templates",
                  "Advanced Sharing Options",
                  "Detailed Analytics",
                  "No CardCraft Branding",
                  "Custom Domain",
                ],
                cta: "Try Pro",
                popular: true,
              },
              {
                title: "Business",
                price: "$24.99",
                period: "/month",
                description: "For teams and growing businesses",
                features: [
                  "Unlimited Digital Cards",
                  "All Premium Templates",
                  "Team Management",
                  "Advanced Analytics & Reports",
                  "Priority Support",
                  "API Access",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-lg border ${plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200"} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block rounded-bl-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white m-2">
                      Popular
                    </span>
                  </div>
                )}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>
                </div>
                <div className="p-6 flex-1 border-t border-gray-200 bg-white">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 bg-white">
                  <Link
                    href="#"
                    className={`inline-flex w-full h-10 items-center justify-center rounded-md ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100"} px-4 py-2 text-sm font-medium shadow`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section id="templates" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mx-auto">
                Templates
              </span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Stunning Templates</h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg">
                Browse our collection of professionally designed templates for every industry and style.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Executive", category: "Business" , image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
              { name: "Creative", category: "Design", image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
              { name: "Tech", category: "IT", image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
              { name: "Minimal", category: "Professional", image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
              { name: "Bold", category: "Marketing", image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
              { name: "Elegant", category: "Finance", image: 'https://cdn.shopify.com/s/files/1/0610/3901/8062/files/dragonfly-9326948_1280.jpg?v=1741451348' },
            ].map((template, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={template.image}
                  width={300}
                  height={400}
                  alt={`${template.name} template`}
                  className="aspect-[3/4] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">{template.name}</h3>
                  <p className="text-white/80 text-sm">{template.category}</p>
                  <Link
                    href="#"
                    className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-100"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100"
            >
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mx-auto">
                Testimonials
              </span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg">
                Don't just take our word for it. Here's what professionals and businesses have to say about CardCraft.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "CardCraft transformed how I network. My digital card gets me more follow-ups than traditional business cards ever did.",
                author: "Sarah Johnson",
                role: "Marketing Director",
                rating: 5,
              },
              {
                quote:
                  "As a freelance designer, my digital card serves as a mini-portfolio. It's been a game-changer for getting new clients.",
                author: "Michael Chen",
                role: "UI/UX Designer",
                rating: 5,
              },
              {
                quote:
                  "Our sales team loves using CardCraft. The analytics feature helps us track engagement and follow up with interested prospects.",
                author: "David Rodriguez",
                role: "Sales Manager",
                rating: 4,
              },
              {
                quote:
                  "The templates are beautiful and so easy to customize. I created my perfect card in less than 10 minutes.",
                author: "Emma Wilson",
                role: "Entrepreneur",
                rating: 5,
              },
              {
                quote:
                  "CardCraft has helped our real estate team stand out in a competitive market. The QR codes on our signs get a lot of scans.",
                author: "James Thompson",
                role: "Real Estate Agent",
                rating: 5,
              },
              {
                quote:
                  "I love that I can update my information anytime without having to print new cards. It's saved me money and reduced waste.",
                author: "Priya Patel",
                role: "Consultant",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 text-left">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                </div>
                <p className="mt-4 italic text-sm">"{testimonial.quote}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Ready to Create Your Digital Card?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-lg">
                Join thousands of professionals who are making meaningful connections with CardCraft.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-blue-600 shadow hover:bg-gray-100"
              >
                Get Started for Free
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white hover:bg-white/10"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
    

      
    </div>
  )
}