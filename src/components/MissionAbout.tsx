// Enhanced by AI on 2025-08-08T15:28:11.121Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Factory,
  Settings,
  BarChart,
  ShieldCheck
} from "lucide-react"
import Link from "next/link"

export default function About() {
  const values = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "I help manufacturers optimize their SAP systems to achieve operational excellence and streamline production processes."
    },
    {
      icon: Settings,
      title: "Technical Expertise",
      description: "With deep knowledge of SAP Manufacturing modules, I deliver tailored solutions that address your specific industry challenges."
    },
    {
      icon: Heart,
      title: "Client-Focused Approach",
      description: "Your business goals drive every project. I work closely with your team to ensure solutions align perfectly with your needs."
    },
    {
      icon: BarChart,
      title: "Results-Driven",
      description: "I focus on delivering measurable improvements in efficiency, productivity, and cost reduction for manufacturing operations."
    }
  ]

  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "50+", label: "Successful Projects", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "12+", label: "Industries Served", icon: Globe }
  ]

  const expertise = [
    {
      name: "SAP S/4HANA Manufacturing",
      role: "Core Expertise",
      image: "SM",
      bio: "Implementation and optimization of SAP S/4HANA for discrete and process manufacturing."
    },
    {
      name: "SAP MES Integration",
      role: "Technical Specialty", 
      image: "MI",
      bio: "Seamless integration between SAP and Manufacturing Execution Systems for real-time production control."
    },
    {
      name: "Production Planning",
      role: "Process Optimization",
      image: "PP",
      bio: "Advanced planning and scheduling solutions to maximize production efficiency and resource utilization."
    },
    {
      name: "Digital Transformation",
      role: "Strategic Consulting",
      image: "DT",
      bio: "Guiding manufacturers through Industry 4.0 adoption with SAP technologies."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Manufacturing Expert
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Manufacturing with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Independent SAP consultant specializing in manufacturing solutions that optimize 
            production processes, reduce costs, and drive operational excellence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Approach</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of experience implementing SAP solutions for manufacturers, 
                I understand the unique challenges facing production environments today.
              </p>
              <p>
                My consulting approach combines deep technical expertise with practical industry 
                knowledge to deliver SAP solutions that truly transform manufacturing operations.
              </p>
              <p>
                Whether you're implementing a new SAP system, optimizing existing processes, or 
                integrating with shop floor systems, I provide hands-on expertise to ensure your success.
              </p>
            </div>
            <Link href="/services">
              <Button className="group">
                Explore My Services
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "I bridge the gap between SAP technology and manufacturing reality, delivering solutions that work on the shop floor."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Michael Weber, SAP Manufacturing Consultant</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">My Expertise</h3>
            <p className="text-muted-foreground">
              Specialized SAP manufacturing knowledge that drives tangible business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Specialized Services</h3>
            <p className="text-muted-foreground">
              Comprehensive SAP manufacturing solutions tailored to your industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {expertise.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {service.image}
                  </div>
                  <h4 className="font-semibold mb-1">{service.name}</h4>
                  <p className="text-sm text-primary mb-3">{service.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Michael's expertise in SAP manufacturing was instrumental in optimizing our production processes. 
                His solutions reduced our cycle times by 22% and improved overall equipment effectiveness by 15%."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Klein</div>
                  <div className="text-sm text-muted-foreground">Operations Director, Precision Manufacturing GmbH</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}