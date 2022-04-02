const t = (en: string, it: string) => ({ it, en });

export const Translations = {
  SPACE: t("The space", "Lo spazio"),
  NEIGHBORHOOD: t("Neighborhood", "Quartiere"),
  OTHER_THINGS: t("Other things to note", "Altre cose da tenere a mente"),
  AMENITIES: t("Amenities", "Servizi"),
  LOADING: t("Loading...", "Loading..."),
  ERROR: t(
    "An error has occurred. Please try again",
    "C'è stato un errore. Per favore riprova"
  ),
  BOOK: t("Book", "Prenota"),
  BOOK_RESPONSE: t(
    "We will send you a response soon.",
    "Ti invieremo presto una risposta"
  ),
  REGISTER: t("Register guests", "Registrazione ospiti"),
  REVIEWS: t("Reviews", "Recensioni"),
  THANKYOU: t("See you on [data]!", "Ci vediamo il [data]!"),
  ERROR_RESERVATION: t(
    "Your reservation link is incorrect",
    "Il link della tua prenotazione non è corretto"
  ),
  RATE_US: t(
    "I hope you enjoyed your staying. Please rate me on:",
    "Spero ti sia piaciuto il posto. Lascia una recensione:"
  ),
  NEXT_TIME: t("See you next time at", "Ci vediamo la prossima volta a"),
  APARTMENT_CODE: t("Enter code", "Codice di entrata"),
  THANKYOU_CONFIRMATION: t(
    "You will receive a confirmation sms soon.",
    "Riceverai presto un di conferma"
  ),
  CODE: t("The apartment code [code]", "Il codice dell'appartamento è [code]"),
  RERAD_MORE: t("Read more...", "Leggi ancora..."),
  HIDE: t("Hide...", "Nascondi..."),
  GUEST_ACCESS: t("Guest access", "Accesso ospiti"),
  HOST: t("Lino", "Lino"),
  HOUSE_RULES: t("House rules", "Regole della casa"),
  TRANSIT: t("Mobility services", "Mobilità"),
  GUESTS: t("[n] guests", "[n] ospiti"),
  BEDROOM: t("[n] bedroom", "[n] stanza"),
  BED: t("[n] bed", "[n] letto"),
  BATH: t("[n] bath", "[n] bagno"),
  ALSO: t("Have a look @", "Dai un'occhiata @"),
  PRIVACY: t("Privacy policy", "Informativa Privacy"),
  COOKIES: t(
    "This website uses cookies to enhance the user experience.",
    "Questo sito utilizza i cookies per migliorare l'esperienza dell'utente"
  ),
  CHECKIN: t("Check-in", "Check-in"),
  CHECKOUT: t("Check-out", "Check-out"),
  GUEST: t("Guest", "Ospite"),
  FIRST_NAME: t("First Name", "Nome"),
  LAST_NAME: t("Last Name", "Cognome"),
  DOC_TYPE: t("Document type", "Tipo di Documento"),
  DOC_NUMBER: t("Document Number", "Numero di Documento"),
  DOC_PLACE: t("Place of issue (if applicable)", "Emesso a (se presente)"),
  BIRTH_DATE: t("Date of Birth", "Data di nascita"),
  BROWSE_CALENDAR: t("Browse calendar", "Sfoglia il calendario"),
  NATIONALITY: t("Nationality", "Nazionalità"),
  PLACE_BIRTH: t(
    "Place of birth (only italians)",
    "Luogo di nascita (solo per italian)"
  ),
  UPLOAD_DOC: t("Upload your document", "Carica il tuo documento"),
  SUBMIT: t("Submit", "Invia"),
  BROWSE_FILE: t("Browse file", "Sfoglia file"),
  EMAIL: t("Email", "Email"),
  RECO: t("Recommendations", "Raccomandazioni"),
  RECO_FAILED: t(
    "Failed to load Recommendations",
    "Impossibile caricare le raccomandazioni"
  ),
} as const;
