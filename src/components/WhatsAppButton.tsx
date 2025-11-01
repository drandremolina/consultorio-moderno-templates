const WhatsAppButton = () => {
  const phoneNumber = "5511971644726";
  const message = "Olá Dr. André Molina! Gostaria de agendar uma consulta de oncologia cutânea.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Abrir WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="w-10 h-10 fill-white group-hover:scale-110 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.203 1.395 1.424-5.295-0.331-0.539c-1.331-2.17-2.046-4.652-2.046-7.199 0-7.68 6.253-13.933 13.933-13.933s13.933 6.253 13.933 13.933c0 7.68-6.253 13.933-13.933 13.933z"/>
        <path d="M23.485 19.622c-0.379-0.19-2.245-1.108-2.594-1.235-0.349-0.127-0.603-0.19-0.857 0.19s-0.984 1.235-1.206 1.489c-0.222 0.254-0.444 0.286-0.823 0.095-0.379-0.19-1.6-0.589-3.047-1.879-1.127-1.003-1.887-2.241-2.109-2.62s-0.024-0.584 0.167-0.773c0.171-0.171 0.379-0.444 0.568-0.667 0.19-0.222 0.254-0.379 0.379-0.633 0.127-0.254 0.063-0.476-0.032-0.667s-0.857-2.063-1.174-2.825c-0.31-0.741-0.625-0.641-0.857-0.652-0.222-0.011-0.476-0.013-0.731-0.013s-0.667 0.095-1.016 0.476c-0.349 0.379-1.333 1.302-1.333 3.175s1.365 3.683 1.555 3.937c0.19 0.254 2.677 4.086 6.489 5.731 0.906 0.39 1.613 0.623 2.164 0.797 0.909 0.288 1.735 0.247 2.388 0.15 0.729-0.109 2.245-0.917 2.562-1.804s0.317-1.646 0.222-1.804c-0.095-0.159-0.349-0.254-0.729-0.444z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;