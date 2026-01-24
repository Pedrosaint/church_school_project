import ExcellenceSection from "../components/excellence_section"
import FeatureCards from "../components/feature_cards"
import { FeaturedPrograms } from "../components/featured_programs/featured_programs"
import HeroCarousel from "../components/hero_carousel"
import NewsSection from "../components/news_section"
import { StudentTestimonies } from "../components/students_testimonal.tsx/students_testimonal"
import { UpcomingEvents } from "../components/upcoming_events/upcoming_events"


const HomeView = () => {
  return (
   <section>
    <HeroCarousel />
    <FeatureCards />
    <ExcellenceSection />
    <NewsSection />
    <FeaturedPrograms />
    <StudentTestimonies />
    <UpcomingEvents />
   </section>
  )
}

export default HomeView
