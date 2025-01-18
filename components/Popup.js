import { useEffect, useState } from "react";
import Link from "next/link";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);

  useEffect(() => {
    const now = new Date();
    const testDate = new Date(2024, 10, 30, 15, 0, 0); // 30 listopada 2024, godzina 15:00
    setShowNewContent(now >= testDate);

    // Pokazuj popup na każdej podstronie
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={handleClose} style={{ overflow: "scroll" }}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={handleClose}>
          X
        </button>

        {showNewContent ? (
          <>
            {/* <p style={{ fontSize: "18px" }}>
            Dziękujemy za Pow Pow B–day Week 🎂 oraz White Week 😊 
            </p>
            <p style={{ fontSize: "18px" }}>
            Do zobaczenia na śniegu i na insta, Riders: 
               <a
                href="https://www.instagram.com/powpow_riders/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                 @powpow_riders
              </a>
               !☃
            </p> */}
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            ⛄ Sezon 24/25 w pełni!
            </p>
            <p style={{ fontSize: "18px", paddingBottom: "7px" }}>Jesteśmy już po pierwszych kursach. Sprawdź, co przygotowaliśmy tej zimy. Dołącz do ekipy Pow Pow Riders.</p>
            <p style={{ fontSize: "18px", paddingBottom: "7px" }}><span style={{ fontWeight: "bold" }}><Link href='/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/' style={{ textDecoration: "none", color: "black" }}>Kurs Butteringowy –</Link></span> Freestyle na stoku. Idealny, jeśli chcesz podnieść swoje freestyle’owe umiejętności! <span style={{ fontWeight: "bold" }}> – ostatnie miejsca</span></p>
            <p style={{ fontSize: "18px", paddingBottom: "7px" }}><span style={{ fontWeight: "bold" }}><Link href='/pow-store/produkt/asystent-instruktora-sits/' style={{ textDecoration: "none", color: "black" }}>Kurs Asystenta Instruktora SITS –</Link></span> 17-23.02.2025 <span style={{ fontWeight: "bold" }}> – ostatnie miejsca</span></p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Półkolonie dla dzieci (10–16 lat)</p>
            <p style={{ fontSize: "18px" }}>❄ Drogi rodzicu, zapisz swoje dziecko na niezapomnianą zimową przygodę.</p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}><Link href='/snowboardowa-polkolonia.html' style={{ textDecoration: "none", color: "black" }}>👉 Więcej informacji</Link></p>

            
          </>
        ) : (
          <>
            <p style={{ fontSize: "18px" }}>
              <strong>Więcej możliwości, mniej ograniczeń</strong> zimą na śniegu.
            </p>
            <p style={{ fontSize: "18px" }}>
              🤫 Ekskluzywna oferta Power Knees, tylko przez chwilę – z którą zaoszczędzisz 15%.
            </p>
            <p style={{ fontSize: "18px" }}>
              ⏳ Zobacz szczegóły:{" "}
              <a
                href="https://powpowriders.com/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                Kliknij tutaj
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
