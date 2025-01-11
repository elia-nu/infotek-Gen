import { create } from 'zustand'

const useStore = create((set) => ({
  // State
  count: 0,
  info: [],
  about: {},
  achievements: [],
  why_choose_us: [],
  who_we_are: [],
  our_goal: [],
  service: [],
  project: [],
  testimonials: [],
  partner: [],
  career: [],
  team: [],
  blogs: [],
  contact: [],
  faq: [],
  footer: [],
   projectdetails: {},
   servicesdetails: {},
  
 // Actions 
  
  setService: (service) => set({ service }),
  setProject: (project) => set({ project }),
  setTestimonials: (testimonials) => set({ testimonials }),
  setTeam: (team) => set({ team }),
  setBlogs: (blogs) => set({ blogs }),
  setContact: (contact) => set({ contact }),
  setFaq: (faq) => set({ faq }),
  setFooter: (footer) => set({ footer }),
  setInfo: (info) => set({ info }),
  setAbout: (about) => set({ about }),
  setAchievements: (achievements) => set({ achievements }),
  setWhyChooseUs: (why_choose_us) => set({ why_choose_us }),
  setWhoWeAre: (who_we_are) => set({ who_we_are }),
  setOurGoal: (our_goal) => set({ our_goal }),
  setPartner: (partner) => set({ partner }),
  setCareer: (career) => set({ career }),
  setProjectDetails: (projectdetails) => set({ projectdetails }),
  setServicesDetails: (servicesdetails) => set({ servicesdetails }),
  
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export default useStore
