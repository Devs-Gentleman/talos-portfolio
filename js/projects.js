export const projects = [
  {
    id: "multithreaded-http-server",
    category: "software",
    label: "[ SOFTWARE // C++ ]",
    title: "MultiThreaded-HTTP-Server",
    description: "A multithreaded HTTP server built in C++ to explore client-server communication, concurrency, and request handling from the ground up.",
    caseStudyUrl: "project.html",
    role: "Independent Developer",
    year: "2026",
    tools: ["C++17", "POSIX Sockets", "Linux APIs", "Make", "Python (Benchmarking)"],
    problem: "Web servers and networking concepts often abstract away the underlying mechanics of client-server communication. I wanted to understand how HTTP requests are received, parsed, processed, and served, as well as how concurrency, connection handling, and server-side architecture work beyond the theoretical concepts taught in networking.",
    process: "Developed the server incrementally, using documentation, AI-assisted research, and structured implementation plans to explore each layer of the system. Starting with TCP socket communication, I progressively implemented HTTP request parsing, response construction, static file serving, a thread pool, REST API endpoints, request logging, connection reuse, and a thread-safe file cache. Each phase was designed to build on the previous one, allowing me to study the underlying mechanisms, trade-offs, and behavior of a web server in practice.",
    result: "Built a multithreaded HTTP server capable of serving static files, handling REST API requests, maintaining persistent connections, and caching file contents. More importantly, the project transformed networking concepts from abstract theory into practical understanding — strengthening my knowledge of TCP, HTTP, request-response architecture, concurrency, synchronization, and server-side systems through hands-on implementation and testing.",
    images: [
      {
        src: "Projects%20Screenshot/Multithreaded%20HTTP%20Server.png",
        alt: "Screenshot of the MultiThreaded-HTTP-Server GitHub repository page showing the project description and file structure"
      }
    ]
  }
];
