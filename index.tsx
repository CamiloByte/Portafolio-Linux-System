import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Terminal, 
  Server, 
  Shield, 
  Database, 
  Mail, 
  Github, 
  Linkedin, 
  ChevronDown, 
  Cpu, 
  Globe, 
  FileCode, 
  CheckCircle,
  Menu,
  X,
  BarChart3,
  Code2,
  Layers,
  Lock,
  Network,
  HardDrive,
  GraduationCap,
  BookOpen
} from 'lucide-react';

// Matrix Rain Effect Component
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to display (Binary and Hex mostly for SysAdmin feel)
    const chars = '0123456789ABCDEF010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black background to create fade trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#16a34a'; // Green-600 text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly or when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Changed to fixed positioning to cover the entire scrollable area
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none" />;
};

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: "GNU/Linux (Debian/RedHat)", level: 95, icon: <Terminal size={18} /> },
    { name: "Bash Scripting & Automatización", level: 90, icon: <FileCode size={18} /> },
    { name: "Seguridad & Firewalls (IPTables)", level: 85, icon: <Shield size={18} /> },
    { name: "Servicios de Red (DNS, DHCP, SSH)", level: 90, icon: <Network size={18} /> },
    { name: "Servidores Web & App (LAMP)", level: 85, icon: <Server size={18} /> },
    { name: "Bases de Datos (MySQL/Admin)", level: 80, icon: <Database size={18} /> },
    { name: "Virtualización (VirtualBox)", level: 85, icon: <Layers size={18} /> },
    { name: "Java & Python (Scripting)", level: 75, icon: <Code2 size={18} /> },
  ];

  const education = [
    {
      title: "Diplomado en Administración de Sistemas Open Source",
      institution: "UNAD / LPI (Linux Professional Institute)",
      year: "2025",
      description: "Especialización técnica profunda en administración de servidores Linux. Preparación oficial para certificación Linux Essentials.",
      icon: <Terminal size={20} />
    },
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
      year: "2021 - Presente",
      description: "Formación integral en arquitectura de computadores, redes y seguridad informática. Promedio académico destacado en áreas de infraestructura.",
      icon: <GraduationCap size={20} />
    },
    {
      title: "Programación en Python",
      institution: "Talento TECH",
      year: "2024",
      description: "Curso intensivo enfocado en desarrollo de software y scripting, aplicado a la automatización de procesos.",
      icon: <Code2 size={20} />
    },
    {
      title: "Análisis y Desarrollo de Sistemas de Información",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      year: "2016 - 2018",
      description: "Tecnólogo enfocado en el ciclo de vida del desarrollo de software, bases de datos y lógica de programación.",
      icon: <BookOpen size={20} />
    }
  ];

  const projects = [
    {
      title: "Servidor de Correo Corporativo Seguro",
      category: "Infraestructura Crítica",
      icon: <Mail className="text-orange-400" size={32} />,
      description: "Implementación desde cero de un servidor de correo electrónico seguro y funcional en entorno Linux, gestionando protocolos de transmisión y buzones.",
      details: [
        "Configuración de Postfix (SMTP) y Dovecot (IMAP/POP3).",
        "Implementación de buzones en formato Maildir para eficiencia.",
        "Integración con clientes gráficos (Thunderbird) y pruebas por consola.",
        "Gestión de usuarios, permisos y análisis de logs para troubleshooting."
      ],
      tags: ["Postfix", "Dovecot", "Linux", "SMTP/IMAP", "Logs"]
    },
    {
      title: "Arquitectura de Seguridad Perimetral",
      category: "Ciberseguridad & Redes",
      icon: <Shield className="text-green-400" size={32} />,
      description: "Diseño y despliegue de un esquema de seguridad de red utilizando Endian Firewall para proteger servicios expuestos y segmentar tráfico.",
      details: [
        "Segmentación de red en zonas: VERDE (LAN) y NARANJA (DMZ).",
        "Reglas de filtrado estricto para servicios HTTP (80) y FTP (21).",
        "Bloqueo de protocolos de reconocimiento (ICMP/Ping) para mitigar escaneos.",
        "Análisis del proceso de arranque (Systemd/GRUB) para hardening."
      ],
      tags: ["Firewall", "DMZ", "Networking", "Systemd", "Hardening"]
    },
    {
      title: "Infraestructura de Hosting Web (LAMP)",
      category: "Administración de Sistemas",
      icon: <Server className="text-blue-400" size={32} />,
      description: "Despliegue de una plataforma completa de gestión de hosting web y bases de datos, simulando un entorno de proveedor de servicios de internet.",
      details: [
        "Instalación y configuración de ISPConfig sobre Stack LAMP.",
        "Gestión de servidores web Apache/Nginx y bases de datos MySQL.",
        "Integración de scripts PHP para captura de datos y notificaciones.",
        "Administración de DNS local y virtualización de entornos."
      ],
      tags: ["ISPConfig", "Apache", "MySQL", "PHP", "VirtualBox"]
    },
    {
      title: "Automatización de Tareas & Scripting",
      category: "DevOps & Scripting",
      icon: <Terminal className="text-purple-400" size={32} />,
      description: "Desarrollo de scripts para automatizar tareas rutinarias de mantenimiento, copias de seguridad y gestión de usuarios en servidores Linux.",
      details: [
        "Automatización de backups comprimidos y cifrados con GPG.",
        "Scripts en Bash para gestión masiva de usuarios y permisos.",
        "Uso de Python para análisis de datos de logs del sistema.",
        "Transferencia segura de archivos automatizada vía SSH/SCP."
      ],
      tags: ["Bash", "Shell Scripting", "GPG", "Cron", "Python"]
    }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-200 font-sans min-h-screen selection:bg-green-500 selection:text-black overflow-x-hidden">
      
      {/* Global Matrix Rain Background */}
      <MatrixRain />

      {/* Content Wrapper - z-10 to stay above the rain */}
      <div className="relative z-10">

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-bold font-mono text-green-400 cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('hero')}>
              <Terminal size={24} />
              <span>sysadmin@cristian:~$</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors font-mono">./PERFIL</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-green-400 transition-colors font-mono">./ESTUDIOS</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-green-400 transition-colors font-mono">./HABILIDADES</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-green-400 transition-colors font-mono">./PROYECTOS</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors font-mono">./CONTACTO</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-green-400">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-800 py-4 flex flex-col items-center gap-4 shadow-xl backdrop-blur-md">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-green-400 font-mono">./PERFIL</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-green-400 font-mono">./ESTUDIOS</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-green-400 font-mono">./HABILIDADES</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-green-400 font-mono">./PROYECTOS</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-green-400 font-mono">./CONTACTO</button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
          
          {/* Static Glow Blobs (local to hero for extra flair) */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/10 rounded-full blur-3xl animate-pulse mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse mix-blend-screen pointer-events-none" style={{animationDelay: '1s'}}></div>

          <div className="container mx-auto px-6 z-10 text-center relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-green-800/50 text-green-400 text-xs font-semibold tracking-wider mb-6 font-mono backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              OPEN TO WORK • LINUX ESSENTIALS
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              Cristian Camilo Aranda
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                Linux System Administrator
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md bg-slate-950/30 backdrop-blur-sm p-4 rounded-xl">
              Ingeniero de Sistemas especializado en la administración de entornos <span className="text-green-400 font-semibold font-mono">GNU/Linux</span>. 
              Combino sólidos conocimientos de infraestructura y seguridad con habilidades de desarrollo 
              <span className="text-slate-200 text-sm mx-2 font-mono bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700">(Java/Python)</span> para automatizar y optimizar operaciones TI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 font-mono">
                <Terminal size={20} />
                Ver Proyectos
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-slate-900/60 backdrop-blur-md border-2 border-green-600 text-green-400 hover:bg-green-900/20 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-mono">
                <Mail size={20} />
                Contactar
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-950/70 backdrop-blur-sm border-y border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-lg border border-slate-800 shadow-2xl font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs text-slate-500">root@server: ~</span>
                    </div>
                    <div className="text-slate-300 space-y-4">
                      <div>
                        <p><span className="text-green-400">root@server:~$</span> cat /etc/profile_info</p>
                        <div className="pl-0 mt-2 text-emerald-300 bg-black/40 p-4 rounded border border-slate-800/50">
                          <p>NAME="Cristian Camilo Aranda"</p>
                          <p>ROLE="Junior Linux SysAdmin"</p>
                          <p>EDUCATION="Ingeniero de Sistemas (UNAD)"</p>
                          <p>CERTIFICATION="LPI Linux Essentials (En proceso)"</p>
                          <p>STATUS="Listo para entornos de producción"</p>
                        </div>
                      </div>
                      <div>
                        <p><span className="text-green-400">root@server:~$</span> ./check_aptitude.sh</p>
                        <p className="text-slate-400">> Analizando perfil...</p>
                        <p className="text-slate-400">> Detectada capacidad de scripting (Bash/Python)</p>
                        <p className="text-slate-400">> Detectada comprensión de backend (Java)</p>
                        <p className="text-white font-bold mt-1">>> RESULTADO: Perfil Híbrido SysAdmin/DevOps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Perfil Profesional</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Administrador de Sistemas Linux Junior con capacidad probada para desplegar, asegurar y mantener servicios críticos de red. 
                  Mi enfoque técnico se centra en la <strong>alta disponibilidad</strong>, la <strong>seguridad perimetral</strong> con firewalls y la <strong>automatización de tareas</strong> mediante scripting.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Cuento con experiencia práctica configurando servidores de correo (Postfix), segmentando redes (VLANs/DMZ) y administrando entornos de hosting web.
                  Busco integrar equipos de infraestructura donde pueda aportar soluciones eficientes para la gestión de servidores y la continuidad del negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-slate-950/60 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Formación Académica</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Base sólida en ingeniería complementada con especialización técnica en infraestructura.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0"></div>

              {education.map((edu, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-green-500 rounded-full z-10 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  
                  <div className="md:w-1/2 w-full pl-8 md:pl-0 md:px-8">
                    <div className={`bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all hover:-translate-y-1 group ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        <span className="text-green-400 font-mono text-xs px-2 py-1 bg-green-900/10 rounded border border-green-900/20">{edu.year}</span>
                        <div className="text-slate-400">
                          {edu.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                      <h4 className="text-green-400 font-medium text-sm mb-4">{edu.institution}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Competencias Técnicas</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Enfoque principal en administración de sistemas, apoyado por conocimientos de desarrollo para la automatización.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all hover:-translate-y-1 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-950 rounded-lg text-green-400 group-hover:text-white group-hover:bg-green-600 transition-colors shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-slate-100 text-sm">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-600 to-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-950/60 backdrop-blur-sm border-t border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Laboratorios & Proyectos</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Casos de estudio prácticos implementados en entornos virtualizados simulando infraestructura de producción.</p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 group">
                  {/* Project Icon/Category Side */}
                  <div className="lg:w-1/4 bg-slate-900/50 p-8 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-slate-800 relative group-hover:bg-slate-900/80 transition-colors">
                    <div className="p-5 bg-slate-950 rounded-full mb-4 shadow-lg border border-slate-800 group-hover:border-green-500/30 transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{project.title}</h3>
                    <span className="text-green-400 text-xs font-bold tracking-widest uppercase px-3 py-1 bg-green-900/10 rounded-full border border-green-900/20">{project.category}</span>
                  </div>

                  {/* Project Details Side */}
                  <div className="lg:w-3/4 p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-slate-300 text-base mb-6 leading-relaxed border-l-2 border-green-500 pl-4">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                        <CheckCircle size={14} />
                        Implementación Técnica
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-green-500 shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-950/80 text-slate-400 text-xs font-mono rounded border border-slate-700 hover:text-green-400 hover:border-green-500/30 transition-colors cursor-default">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Hablamos de Infraestructura?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Disponible para roles de SysAdmin Junior, Soporte L2 o Analista de Infraestructura en Colombia.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:ccaranda.sandoval@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-black rounded-xl font-bold transition-all shadow-lg hover:shadow-green-600/25 hover:-translate-y-1 w-full md:w-auto justify-center font-mono">
                <Mail size={20} />
                ccaranda.sandoval@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/cristian-camilo-aranda" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold border border-slate-800 hover:border-green-500/30 transition-all w-full md:w-auto justify-center group font-mono">
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
                LinkedIn
              </a>
              <div className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-slate-400 rounded-xl font-semibold border border-slate-800 w-full md:w-auto justify-center font-mono cursor-default">
                <Globe size={20} />
                Colombia
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-900 bg-slate-950/90 backdrop-blur-md text-center text-slate-600 text-sm relative z-10">
          <div className="container mx-auto px-6">
            <p>© 2025 Cristian Camilo Aranda Sandoval.</p>
            <p className="mt-2 font-mono text-xs">echo "Construyendo el futuro con Open Source"</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Portfolio />);