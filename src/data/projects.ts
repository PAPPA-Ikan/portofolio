export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pineleaf Cleaning Product Website",
    description:
      "PINELEAF is a website development project for a shoe, bag, and apparel cleaning brand. The website is designed to provide comprehensive product information while simultaneously making it easier for customers to order services online. For this project, I worked with a team to design a responsive, modern, and user-friendly interface. The development process took approximately two months, focusing on an attractive design, clear navigation, and an optimal user experience to ensure customers can easily find information about available products and services.",
    tech: ["TypeScript", "Tailwind CSS", "FastAPI"],
    github: "https://github.com/overlogic-universe/pineleafcare-web/tree/pandu",
    image: "/pl.png"
  },
  {
    id: 2,
    title: "Web-Based Financial Management System",
    description:
      "A web-based financial management system developed for Muhammadiyah Al-Kautsar Integrated Islamic Elementary School. This application facilitates transaction recording, financial data management, and the creation of structured financial reports. The system is designed to improve school administrative efficiency, reduce manual recording errors, and simplify financial data monitoring and reporting.",
    tech: ["TypeScript", "Tailwind CSS"],
    github: "https://github.com/overlogic-universe/sistem-keuangan-web/tree/pandu",
    image: "/wb.png"
  },
  {
    id: 3,
    title: "Anugerah Powder Coating Company Website",
    description:
      "A company profile website was developed for Anugerah Powder Coating to improve online service accessibility. The website provides information about powder coating services, available packages, and displays documentation of work before and after the coating process. The development focused on an intuitive user experience so visitors can easily understand the services offered, view the work portfolio, and contact the service provider more quickly and efficiently.",
    tech: ["TypeScript", "Tailwind CSS"],
    github: "https://github.com/overlogic-universe/anugerah-powder-coating-web/tree/pandu",
    image: "/pw.png"
  }
]