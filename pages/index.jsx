import React from "react";
import Dummy from "@/components/Dummy";
import NavBarItem from "@/components/NavBarItem";
import SideBarItem from "@/components/SideBarItem";
import Niveau3 from "@/components/Niveau3";
import ImmoJungleBisInternal from "@/components/ImmoJungleBisInternal";
import Link from "next/link";

const Index = () => {
  const PageComponent = () => {
    return (
      <>
        <h2>this is a page component from home page modified by AL</h2>;
      </>
    )
  };

  return (
    <>
      <h1> Hello World! this is the Home page</h1>
      <PageComponent />
      <div className="generic">
        <Dummy />
      </div>
    
      <div className="generic">
        <Link href="/other-page">other page</Link>
        <h3></h3>
        <Link href="/immo-jungle">immo jungle</Link>
      </div>*/
    </>
  );
};

export default Index;

/*

 <div className="generic">
        <NavBarItem />
      </div>
      <div className="generic">
        <SideBarItem />
      </div>
      <div className="generic">
        <Niveau3 />
      </div>

      <div className="generic">
        <Niveau4 />
      </div>


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
