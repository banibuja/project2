import React, { useEffect, useRef } from 'react';

const CardSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add the animation class when the card is in view
            observer.unobserve(entry.target); // Stop observing after the animation is triggered
          }
        });
      },
      { threshold: 0.3 } // Trigger the animation when 30% of the card is visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full h-auto mt-[3rem]">
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="w-full md:w-[48%] lg:w-[39rem] h-auto flex flex-col sm:flex-row items-center bg-[#fff] p-4 sm:p-[30px] rounded-[10px] fadeRight opacity-0"
          style={{ animationDelay: `${index * 0.5}s` }} // Animation delay for each card
        >
          <img
            className="h-[100px] sm:h-[129px] w-[100px] sm:w-[120px] sm:mr-4"
            src={card.imgSrc}
            alt={card.title}
          />
          <div className="text-center sm:text-left">
            <div className="font-bold text-[20px] sm:text-[24px] leading-[1.2]">{card.title}</div>
            <div className="text-[14px] sm:text-[16px] text-[#728291] leading-[1.5] mt-2">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardsData = [
  {
    imgSrc: 'https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd106312edd26ca53b1b77_Untitled-3%201.avif',
    title: 'Komplette finanzielle Unabhängigkeit',
    description:
      'Bau dir ein zweites finanzielles Standbein auf, mache dich langfristig unabhängig von deinem Arbeitgeber und sichere dir einen höheren Lebensstandard.',
  },
  {
    imgSrc: 'https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd1063d7e938d9f5c79317_Untitled-3%201-1.avif',
    title: 'Sprenge deine Einkommensgrenzen',
    description:
      'Als Trader sind deinem Einkommen keine künstlichen Grenzen mehr gesetzt. Mit dieser Fähigkeit hast du die volle Kontrolle über dein Einkommen.',
  },
  {
    imgSrc: 'https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd10635b19cc084b2099c2_Untitled-3%201-2.avif',
    title: 'Lebe nach deinen Regeln',
    description:
      'Genieße ein Leben ohne Einschränkungen. Du tradest wo und wann du willst - dabei ist es egal, ob du Zuhause bist oder die Welt bereisen möchtest.',
  },
  {
    imgSrc: 'https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd10638eee05feffd9aaa0_Untitled-3%201-3.avif',
    title: 'Verdiene in jeder Marktlage',
    description:
      'Daytrader profitieren sowohl von steigenden als auch von fallenden Kursen. Mit unserer TF-Methode kannst du markunabhängig Gewinne erzielen.',
  },
];

export default CardSection;
