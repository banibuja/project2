"use client";

import React, { useState } from 'react';



function Home() {


  const [showColumns, setShowColumns] = useState(false);

  const handleShowColumns = () => {
    setShowColumns(true); 
  };

  const handleToggleColumns = () => {
    setShowColumns(prevState => !prevState);
  };
  return (
    <main className="relative" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="light-bg">
            
     <header className="w-full h-[3.3rem] py-1 bg-[#fff] mx-auto">
        <nav className="flex justify-around items-center h-full">
          <div className="left-images">
            <img
              src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3ef7_logo.webp"
              alt="Logo"
              width={38}
              height={32}
            />
          </div>

          <div className="right-images flex items-center">
            <img
              src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
              alt="Avatar"
              width={114}
              height={30.19}
            />
            <div className="text-nav ml-4 text-black text-[12px]">
              Beretis <strong>2.145+</strong> Mal bestellt
            </div>
          </div>
        </nav>
      </header>

      <div className="relative w-screen flex flex-col items-center z-20 mt-10">
        <div className="text-[12px] text-black font-bold bg-white py-2 rounded-3xl px-4 flex items-center uppercase mt-4">
          <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
          Kostenloser Trading-Kurs
        </div>

        <h1 className='text-center text-black text-[28px] md:text-[56px] tracking-[.7px] font-bold leading-[1.1] mt-6'>
          In nur 7 Tagen seriös <br /> Trading lernen
        </h1>

        <div className="text-center text-black text-[16px] text-[#7289] tracking-[.32px] font-[1.5] my-4 px-4">
          Dein Start ins Daytrading mit Schritt für Schritt Anleitungen, sofort <br /> umsetzbaren Tipps, Brokerempfehlungen, Chartanalyse und DAX <br /> Strategie für nachhaltig profitables Trading.
        </div>

        <div className="bg-[#13f97b] h-20 w-[388px] rounded-lg p-4 cursor-pointer flex items-center justify-between text-[16px] font-[600] transition-all duration-500 ease-in-out shadow-[0_24px_32px_-20px_rgba(19,249,123,0)] hover:scale-105 mt-5 relative">
  <div className="btn-text w-full text-center">
    Jetzt kostenlosen Zugang sichern
  </div>

  <div className="btn-arrow-icon"> 
    <img 
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3e88_arrow-right%201.svg" 
      alt="Arrow"
    />
  </div>

  <div className="interaction absolute top-0 left-0 h-full w-[388px] animate-interaction">
    <img className="h-full w-full object-cover"
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webps"
      alt="interaction"
      loading="lazy"
      sizes="(max-width: 100px), 200.998046875px"
      srcSet="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%25203404-p-500.png 500w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp 654w"
    />
  </div>
</div>


          <div className="flex items-center justify-center mt-[2rem] z-20">
          <img
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
            alt="Avatar"
            width={114}
            height={30.19}
          />
          <div className="text-people ml-4 text-black text-[12px]">
            Beretis <strong>2.145+</strong> Mal bestellt
          </div>
          </div>
          </div>

        

      <img
        className="absolute top-[3.3rem] inset-0 w-full h-50 object-cover z-10 opacity-100 bg-gray-80"
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d7215fe0a981366df06f3c_Group%202087326459-p-2600.png"
        alt="Large banner"
        
      />


<div className="relative z-20 mt-[5rem]">
  <img
    className="w-[925px] h-[430.02px] object-cover mx-auto relative"
    src="images/png1.png"
    alt="New Image"
    loading='lazy'
    sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 1439px) 92vw, 925px"
    srcset="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-500.webp 500w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-800.webp 800w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-1080.webp 1080w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-1600.webp 1600w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-2000.webp 2000w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-2600.webp 2600w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2-p-3200.webp 3200w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d72bafcf5c6b7b6a1493d7_MacBook%20Air%20M2.webp 3959w"
  />

  <div
          className="absolute inset-auto w-full h-[250px] bg-gradient-to-b from-[#f1f3f500] to-[#f1f3f5] z-30"
          style={{ inset: 'auto 0% -1%' }}
        ></div>
      </div>

      <div className="flex justify-between items-center m-auto w-[70%] mt-[5rem] ">
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c5162bf58d9ecb4f3b9_01.avif" alt="" />
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c50de0cca26456f73d0_02.avif" alt="" />
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c51fe74fff065641ef3_03.avif" alt="" />
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c502151a3464e282feb_04.avif" alt="" />
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c5099c8b478e9732b9d_05.avif" alt="" />
        <img className="h-32px w-1/6" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd0c509710055dd7251e0a_06.avif" alt="" />
      </div>



            <div className="Tradingdeine w-full h-auto mt-[5rem]">
              <h1 className="font-bold text-[45px] tracking-[.4px] leading-[1.2] text-center">
                Wie ergologreiches Trading deine <br />
                <span className="block text-[#0cdc6a]">Zuknfit Verandern kann</span>
              </h1>
              <div className="desc flex justify-center mt-4 text-[#728291] text-[16px]">
                mit nur 30 50 Minuten Zitaufawnd am Tag.
              </div>


              <div className="flex flex-wrap justify-center gap-4 w-full h-auto mt-[3rem]">
                  <div className="w-[39rem] h-auto flex items-center bg-[#fff] p-[30px] rounded-[10px]">
                    <img className='h-[129px] w-[120px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd106312edd26ca53b1b77_Untitled-3%201.avif" alt="" />
                    <div className="ml-4"> 
                      <div className="font-bold text-[24px] leading-[1.2]">Komplette finanzielle Unabhängigkeit                      </div>
                      <div className='text-[16px] text-[#728291] leading-[1.5] mt-2'>Bau dir ein zweites finanzielles Standbein auf, mache dich langfristig unabhängig von deinem Arbeitgeber und sichere dir einen höheren Lebensstandard.</div>
                    </div>
                  </div>
                  
                  <div className="w-[39rem] h-auto flex items-center bg-[#fff] p-[30px] rounded-[10px]">
                    <img className='h-[129px] w-[120px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd1063d7e938d9f5c79317_Untitled-3%201-1.avif" alt="" />
                    <div className="ml-4">
                      <div className="font-bold text-[24px] leading-[1.2]">Sprenge deine Einkommensgrenzen                      </div>
                      <div className='text-[16px] text-[#728291] leading-[1.5] mt-2'>Als Trader sind deinem Einkommen keine künstlichen Grenzen mehr gesetzt. Mit dieser Fähigkeit hast du die volle Kontrolle über dein Einkommen.</div>
                    </div>
                  </div>
                  
                  <div className="w-[39rem] h-auto flex items-center bg-[#fff] p-[30px] rounded-[10px]">
                    <img className='h-[129px] w-[120px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd10635b19cc084b2099c2_Untitled-3%201-2.avif" alt="" />
                    <div className="ml-4">
                      <div className="font-bold text-[24px] leading-[1.2]">Lebe nach deinen Regeln                      </div>
                      <div className='text-[16px] text-[#728291] leading-[1.5] mt-2'>Genieße ein Leben ohne Einschränkungen. Du tradest wo und wann du willst - dabei ist es egal, ob du Zuhause bist oder die Welt bereisen möchtest.</div>
                    </div>
                  </div>
                  
                  <div className="w-[39rem] h-auto flex items-center bg-[#fff] p-4 rounded-[10px]">
                    <img className='h-[129px] w-[120px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd10638eee05feffd9aaa0_Untitled-3%201-3.avif" alt="" />
                    <div className="ml-4">
                      <div className="font-bold text-[24px] leading-[1.2]">Verdiene in jeder Marktlage                      </div>
                      <div className='text-[16px] text-[#728291] leading-[1.5] mt-2'>Daytrader profitieren sowohl von steigenden als auch von fallenden Kursen. Mit unserer TF-Methode kannst du markunabhängig Gewinne erzielen.</div>
                    </div>
                  </div>
                </div>


            </div>

            <div className="part3 w-full h-auto bg-[#041212] pt-[3rem] text-[#fff] flex flex-col items-center rounded-2xl"> {/* Ndryshuar në flex-col për të rreshtuar elementët vertikalisht */}
  
            <div className="text-[12px] flex justify-center font-bold bg-[#fefefe0f] w-[10rem] h-auto py-2 rounded-2xl px-3 items-center uppercase mt-4">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              Dein Lehrplan
            </div>

            <div className="title flex justify-center mt-10 text-[48px] font-bold leading-[1.2] tracking-[.4px]"> 
              <h1>In nur 7 Tagen sicher traden</h1>
            </div>


            <div className="columns mt-[3.5rem]">
          <div className="flex justify-center gap-5">
          <div className="w-[26rem] h-auto p-4 bg-[#fefefe08] rounded-[10px] " style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <img className='h-[15rem] w-full mb-2' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd16540ad3c85ea696aa79_Group%202087326428.avif" alt="" />
            <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
            Tag 1

            </div>
              <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                Die TF Methode
              <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.

              </div>
              </div>
              </div>

              <div className="w-[26rem] h-auto p-4 bg-[#fefefe08] rounded-[10px] " style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <img className='h-[15rem] w-full mb-2' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd19add8d6303b525ea374_Group%202087326437.avif" alt="" />
              <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
              Tag 2

              </div>
              <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                Die TF Methode
              </div>
              <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.

              </div>
              </div>
              <div className="w-[26rem] h-auto p-4 bg-[#fefefe08] rounded-[10px] " style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <img className='h-[15rem] w-full mb-2' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d70e3588f256762cf127db_Group%202087326472.png" alt="" />
              <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
              Tag 3

              </div>
              <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                Die TF Methode
              </div>
              <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.

              </div>
              </div>

              </div>  

              </div>
              {!showColumns && (
              <div className="w-full h-auto mt-10 flex justify-center">
        <div
          onClick={handleToggleColumns} // Step 3: Add onClick to toggle the visibility
          className="button flex items-center justify-between w-[20rem] bg-[#69bc8f26] font-[600] rounded-[10px] p-[20px] m-auto cursor-pointer" 
          style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <p className="mr-2">Mehr anzeigen</p>
          <div className="icon-create w-[24px] h-[24px]">
            <img src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdc762139d5d2dbcb2c74c_Add%20box.png" alt="" />
          </div>
        </div>
      </div>
      )}

      {showColumns && (

          <><div className="column-add mt-5">
              <div className="flex flex-wrap justify-center gap-3">
                <div className="w-[40rem] h-auto p-[20px] bg-[#fefefe08] mb-3 relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
                  <img
                    className="w-full h-auto object-cover"
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d70f4263b1d68278be1fe5_Group%202087326667.png"
                    alt="" />
                  <div className="on_the_trader relative z-[20]">
                    <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
                      Tag 4
                    </div>
                    <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                      Markstrukturen

                    </div>
                    <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
                      Erlerne die Grundlagen der technischen Analyse sowie das Lesen der Märkte, um die Entwicklung einer Aktie zu verstehen.
                    </div>
                  </div>

                  <div className="trader_block-overlay" style={{
                    backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
                    height: '243px',
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    top: '40%',
                    zIndex: 10,
                  }}>
                  </div>
                </div>

                <div className="w-[40rem] h-auto p-[15px]  bg-[#fefefe08] mb-3 relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
                  <img
                    className="imgtog5 w-auto h-auto"
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdcaea1657996322be914b_U.avif"
                    alt="" />
                  <div className="on_the_trader relative z-[20] mt-[-8.7rem]">
                    <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
                      Tag 5
                    </div>
                    <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                      Die TF Methode
                    </div>
                    <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
                      Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
                    </div>
                  </div>

                  <div className="trader_block-overlay" style={{
                    backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
                    height: '243px',
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    top: '40%',
                    zIndex: 10,
                  }}>
                  </div>
                </div>




                <div className="w-[40rem] h-auto p-[15px]  bg-[#fefefe08] mb-3 relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
                  <img
                    className="imgtog5 w-auto h-auto"
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d70fe18435ec9fd92ece3a_Group%202087326431.png"
                    alt="" />
                  <div className="on_the_trader relative z-[20] mt-[-8.7rem]">
                    <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
                      Tag 6
                    </div>
                    <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                      Die TF Methode
                    </div>
                    <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
                      Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
                    </div>
                  </div>

                  <div className="trader_block-overlay" style={{
                    backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
                    height: '243px',
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    top: '40%',
                    zIndex: 10,
                  }}>
                  </div>
                </div>










                <div className="w-[40rem] h-auto p-[15px]  bg-[#fefefe08] mb-3 relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
                  <img
                    className="imgtog5 w-auto h-auto"
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdcaea186d4f1e46c729f4_Frame%202087326564.avif"
                    alt="" />
                  <div className="on_the_trader relative z-[20] mt-[-3rem]">
                    <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
                      Tag 7
                    </div>
                    <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
                      Die TF Methode
                    </div>
                    <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
                      Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
                    </div>
                  </div>

                  <div className="trader_block-overlay" style={{
                    backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
                    height: '200px',
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    top: '50%',
                    zIndex: 10,
                  }}>
                  </div>
                </div>







              </div>
            </div><div className="bg-[#13f97b] h-20 w-[388px] rounded-lg p-4 cursor-pointer flex items-center justify-between text-[16px] font-[600] transition-all duration-500 ease-in-out shadow-[0_24px_32px_-20px_rgba(19,249,123,0)] hover:scale-105 mt-5 relative">
                <div className="btn-text w-full text-center">
                  Jetzt kostenlosen Zugang sichern
                </div>

                <div className="btn-arrow-icon">
                  <img
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3e88_arrow-right%201.svg"
                    alt="Arrow" />
                </div>

                <div className="interaction absolute top-0 left-0 h-full w-[358px] animate-interaction overflow-hidden">
                  <img className="h-full w-full object-cover"
                    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webps"
                    alt="interaction"
                    loading="lazy"
                    sizes="(max-width: 100px), 200.998046875px"
                    srcSet="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%25203404-p-500.png 500w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp 654w" />
                </div>
              </div><div className="flex items-center justify-center mt-[2rem] z-20 mb-[5rem]">
                <img
                  src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
                  alt="Avatar"
                  width={114}
                  height={30.19} />
                <div className="text-people ml-4 text-[#fff] text-[12px]">
                  Beretis <strong>2.145+</strong> Mal bestellt
                </div>
              </div></>

    )}


</div>

<div className="part3 bg-gradient-[#f1f3f5, #fff]">
<div className="mt-[6rem] flex justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6 ml-2">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <p>Trustpilot</p>

  </div>


  <div className="flex flex-wrap justify-center gap-4 w-[100%] h-auto mt-[3rem]">
  <div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">2.145+</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Zurfriedene</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Teilnehmer/innen</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f60_images-group-p-500.png"
      alt=""
      className="mt-[2rem] object-cover bg-contain bg-repeat w-[27rem] h-[10.1rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>

  {/* Kolona 2 */}
  <div className="relative flex flex-col rounded-[12px] items-start bg-[#fff] pt-[2rem] pl-[2rem] w-[53rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600] col-start-2 z-20">
    <span className="block text-[28px]  tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">Mehr als</span>
    <span className="text-[#0ec661] z-20">12 Top-Experten</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">im Teams</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/664cd3b45a1b4940ebcfc4ab_272327.webp"
      alt=""
      className="w-[820.33px] h-[300px] object-cover bg-contain bg-repeat mr-2 mt-[-6.3rem] z-10"
      style={{ backgroundImage: '100%' }}
    />
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '80px',
        position: 'absolute',
        bottom: '0',
        width: '94%',
        zIndex: 10,
        marginRight: "4rem",
      }}
    />
  </div>

</div> 



<div className="flex flex-wrap justify-center gap-4 w-[100%] h-auto mt-[3rem]">
  <div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">

    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">Wir sind ein</span>
    <span className="text-[#0ec661] z-20">deutsches</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">Unternehmen</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/664cd3ac78e980e08b45322e_272326.webp"
      alt=""
      className="mt-[-5rem] object-cover bg-contain bg-repeat relative z-10"
      style={{ backgroundImage: '100%' }}
    />

    <img className='absolute bottom-[5rem] z-20 w-[260px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/665490e2dc5220d2999408d9_370483916-p-500.webp" alt="" />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
<div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">15.000+</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Durchgefuhrte</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Trades</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f5f_frame-numbers-p-500.png"
      alt=""
      className="mt-[2rem] object-cover bg-contain bg-repeat w-[27rem] h-[10.1rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
<div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">15 Jahre</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Trading</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Erfahrung</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff4016_Frame%25201948755811-p-500.png"
      alt=""
      className="mt-[2rem] object-cover bg-contain bg-repeat w-[27rem] h-[10.1rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
</div>
</div>
<div className="part5 mt-[6rem]">
  <div className="relative w-screen flex flex-col items-center z-20 mt-10">
    <div className="text-[12px] text-black font-bold bg-white py-2 rounded-3xl px-4 flex items-center uppercase mt-4">
      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
      Erkennst du dich hier wieder?
    </div>

    <div className="text-center text-black text-[40px] tracking-[.7px] font-bold leading-[1.1] mt-6">
      Für wen dieser Kurs ist
    </div>

    <div className="flex flex-wrap justify-center items-start w-full h-auto mt-10 gap-6">
      <div className="w-[32rem] bg-[#fff] p-3 rounded-[20px]">
        <div className="button bg-[#0cdc6a] text-[#ffffff] font-bold pt-[15px] pb-[15px] text-[20px] items-center text-center rounded-[10px]">
          100% richtig:
        </div>
        <ul className="list-inside mt-4 list-none m-10 text-[16px] text-[#728291]">
        <li className="flex mt-10">
        <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du interessiert dich für die Börse
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst eine neue Fähigkeit lernen
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst finanzielle Freiheit erreichen
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du hast 30-60 Minuten Zeit pro Tag
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst erfolgserprobte Trading-Strategien
    </li>
</ul>
      </div>
      
      <div className="w-[32rem] bg-[#fff] p-3 rounded-[20px]">
        <div className="button bg-[#ff0000] text-[#ffffff] font-bold pt-[15px] pb-[15px] text-[20px] items-center text-center rounded-[10px] ">
        Definitiv nicht:
        </div>
        <ul className="list-inside mt-4 list-none m-10 text-[16px] text-[#728291]">
        <li className="flex mt-10">
        <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Trading interessiert dich nicht

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du bist nicht lernbereit

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du hast keine finanziellen Ziele

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst keine Zeit investieren

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du denkst Trading hat mit Glück zu tun

    </li>
</ul>
      </div>
    </div>
  </div>
</div>



<div className="part5 w-full h-auto bg-[#041212] rounded-[20px]">

<div className="left-img">
  <img src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd24c802a20ec487fa78e0_image%201376-p-1080.webp" alt="" />
</div>
</div>










      <style jsx>{`
        @keyframes moveInteraction {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(40%);
          }
        }
        .animate-interaction {
          animation: moveInteraction 3s linear infinite;
        }
      `}</style>



</div>
 
    </main>
  );
}

export default Home;
