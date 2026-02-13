import Megoldas from "@/app/Megoldas";

export default function HomePage(){
  const m: Megoldas = new Megoldas("dakar.txt")
  return(
    <div>
      <div>2. feladat: Bajnokok száma: {m.bajnokokSzama}</div>
      <div>3. feladat: Francia bajnokok aránya: {}%</div>
      <div>4. feladat: {}</div>
      <div>5. feladat: A következő évben/években nem rendezték meg a versenyt: {}</div>
      <div>6. feladat: Mr. Dakar címet</div>
    </div>
  )
}


