import Link from "next/link";

const ImmoJungle = () => {

  return (
    <>
      <h1> immo jungle </h1>
      <div className="">



        
      </div>
      <div className="generic">
        <Link href="/">Home page</Link>
      </div>
    </>
  );
};

export default ImmoJungle;


/*

// exemple de fonction-composant pour une "page", située dan le répertpoire "pages"
// comme toutes les fonctions-composants react, le nom doit doit vommencer par une lettre majuscule
// il est recommdé d'utiliser un nom qui puisse facilement être associé au nom de la page
// par exemple si la page s'appelle bidule.jsx alors la la fonction pourrait s'appeller Bidule
//
// attention, le nom de la page elle même doit contenir que des lettres minuscules des chiffres ou le signe moins - 
//le nom de la paage doit commencer par une lettre
// et terminer avec le suffixe .jsx
// noms de page valabes: etre-et-avoir.jsx ou etre-et-avoir25.jsx ou etre25-et-avoir.jsx
// noms de page nom valables: être-et-avoir.jsx ou EtreEtAvoir.jsx ou etre_et_avoir.jsx ou 25-etre-et-avoir.jsx
//
//l nom de page index.jsx est reservée et doit obligatoirement et uniquement être utilisé pour la home-page



const NomDeLaPageCouranteAvecUneLettreMajusculeAuDepart =  () => {
  return (
    <>
      Cette fonction ne fait pas grand chose, elle affice cette phrase
    </>
  );
}

export default NomDeLaPageCouranteAvecUneLettreMajusculeAuDepart;




*/
