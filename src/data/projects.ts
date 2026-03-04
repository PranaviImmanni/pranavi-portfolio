export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  tools: string[];
  results: string;
  gradient: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "student-performance-management",
    title: "Student Performance Management & Analytics",
    tagline: "OOP-based analytics system for understanding student outcomes",
    problem:
      "Educators often lack intuitive tools to quickly see which students may need support or which factors most influence performance across math, reading, and writing.",
    approach:
      "Built a reusable analytics system in Python using an object-oriented `Student` class to store attributes and compute average scores. Cleaned the StudentsPerformance dataset, engineered features like `average_score`, and created visualizations (boxplots, heatmaps, distributions) to explore gender, parental education, lunch type, race/ethnicity, and test prep effects. Applied t-tests and ANOVA to statistically validate observed trends.",
    tools: ["Python", "pandas", "seaborn", "matplotlib", "SciPy", "Google Colab"],
    results:
      "Confirmed significant performance differences across demographics; highlighted how parental education, test preparation, and socioeconomic factors impact scores; created a reusable analysis notebook that can be extended into predictive models or dashboards.",
    gradient: "from-sky-400/20 to-rose-300/20",
    githubUrl: "https://github.com", // placeholder
    imageUrl: "/images/student-performance.png",
  },
  {
    slug: "ai-skin-analysis-scanner",
    title: "AI-Powered Skin Analysis Scanner",
    tagline: "User-friendly skin care app for everyone, everywhere",
    problem: "I wanted to create a user-friendly app for everyone across the world to take care of their skin. People often lack access to quick, reliable skin insights and personalized routines.",
    approach: "Built an AI-powered skin scanner that immediately detects what might be wrong with your skin and gives full details—including when you need to consult a doctor. The app also provides complete skincare routines with an organized plan and suggests skin products available for you, so users can act on insights right away.",
    tools: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "Flask"],
    results: "Achieved over **85%** accuracy on held-out test set; reduced time-to-first-insight from **days to seconds** for pilot users.",
    gradient: "from-rose-500/20 to-pink-500/20",
    githubUrl: "https://github.com",
    imageUrl: "/images/skin-scanner.png",
  },
  {
    slug: "autonomous-vehicle-ev-analytics",
    title: "Autonomous Vehicle Vision & EV Sensor Analytics",
    tagline: "Vision, sensor fusion, and predictive analytics for EV fleets",
    problem: "Fleet operators needed real-time insights from autonomous vehicle sensors and EV telemetry to optimize routes, predict failures, and improve safety.",
    approach: "Built an end-to-end pipeline combining computer vision for object detection, time-series analytics for sensor data, and ML models for anomaly detection and failure prediction. Designed APIs and dashboards for operations teams.",
    tools: ["Python", "TensorFlow", "SQL", "PostgreSQL", "FastAPI", "React"],
    results: "Reduced unplanned maintenance by **23%**, improved route efficiency by **15%**, and enabled real-time anomaly alerts for **50+** vehicle metrics.",
    gradient: "from-pink-500/20 to-rose-400/20",
    githubUrl: "https://github.com",
    imageUrl: "/images/ev-car.png",
  },
  {
    slug: "spotify-large-scale-analytics",
    title: "Spotify Large-Scale Data Analytics",
    tagline: "Big data pipelines and analytics on streaming behavior",
    problem: "Understanding listening patterns at scale was limited by ad-hoc queries and no unified pipeline for billions of events.",
    approach: "Designed and implemented scalable ETL and analytics on Spotify-like event data using distributed processing. Built dashboards for engagement, retention, and trend analysis.",
    tools: ["Python", "Spark", "SQL", "AWS", "Tableau"],
    results: "Processed **10M+** events daily; reduced report generation time from **hours to minutes**; enabled weekly trend reports for product teams.",
    gradient: "from-rose-400/20 to-pink-400/20",
    githubUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&q=80",
  },
  {
    slug: "customer-behavior-segmentation",
    title: "Customer Behavior Segmentation",
    tagline: "Clustering and segmentation for targeted strategies",
    problem: "Marketing and product teams needed data-driven customer segments to personalize campaigns and prioritize features.",
    approach: "Applied unsupervised learning (K-means, hierarchical clustering) and RFM-style features to segment users. Validated segments with business metrics and built actionable profiles.",
    tools: ["Python", "pandas", "scikit-learn", "SQL", "Tableau"],
    results: "Identified **5** stable segments with distinct behaviors; increased campaign CTR by **18%** for targeted segments; informed feature roadmap with segment priorities.",
    gradient: "from-pink-400/20 to-rose-300/20",
    githubUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    slug: "stock-tracker",
    title: "Stock Tracker",
    tagline: "Real-time data ingestion and portfolio analytics",
    problem: "Individual investors needed a simple way to track positions, view performance, and get alerts without switching between multiple tools.",
    approach: "Built a stock tracker with real-time or batch data ingestion, portfolio aggregation, and basic performance metrics. Added optional alerts and a clean dashboard.",
    tools: ["Python", "SQL", "REST APIs", "Streamlit", "pandas"],
    results: "Supported **100+** symbols; **sub-minute** latency for portfolio P&L; reduced time spent on manual tracking by an estimated **70%** in user feedback.",
    gradient: "from-rose-300/20 to-pink-500/20",
    githubUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
