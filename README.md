# Hima – webshop

Statikus, egyfájlos webshop (HTML + CSS + JS, keretrendszer nélkül). Kosár és fizetés: Snipcart.
Üzemeltető: Keystone Dynamics Kft.

## Fájlok

| Fájl | Mi ez |
|---|---|
| `index.html` | maga a bolt – minden termék, kép, stílus és szkript ebben van |
| `impresszum.html` · `aszf.html` · `adatkezeles.html` · `elallas.html` · `szallitas-fizetes.html` | magyar jogi oldalak |
| `imprint.html` · `terms.html` · `privacy.html` · `withdrawal.html` · `shipping-payment.html` | angol jogi oldalak |
| `agb.html` · `datenschutz.html` · `impressum.html` · `versand-zahlung.html` · `widerruf.html` · `furrito.html` | régi német/korábbi útvonalak, átirányító csonkok |
| `robots.txt` · `sitemap.xml` | keresőknek |

## Élesítés előtt kötelező

1. **Snipcart kulcs.** Az `index.html`-ben cseréld ki az `A_TE_PUBLIC_API_KULCSOD` szöveget a Snipcart publikus API-kulcsodra.
2. **Domain.** A `robots.txt`-ben és a `sitemap.xml`-ben írd át a `PELDA-DOMAIN` helyőrzőt az éles domainre.
3. **E-mail cím.** A `hello@hima.hu` cím helyőrző – írd át arra, ami tényleg működik. Több helyen szerepel: `index.html` lábléc és GPSR-blokk, valamint minden jogi oldal.
4. **Cégadatok ellenőrzése.** A jogi oldalakon szereplő adószám, cégjegyzékszám és székhely a Keystone Dynamics Kft.-é – nézd át, hogy naprakész-e.

## Közzététel GitHub Pages-en

```bash
git init
git add .
git commit -m "Hima webshop"
git branch -M main
git remote add origin https://github.com/<felhasznalonev>/<repo>.git
git push -u origin main
```

Ezután a repóban: **Settings → Pages → Source: Deploy from a branch → main / (root)**.

Saját domainhez hozz létre egy `CNAME` nevű fájlt a mappa gyökerében, benne egyetlen sorral (pl. `hima.hu`), és a domain szolgáltatódnál állítsd be a GitHub Pages DNS-rekordjait.

## Amit érdemes tudni

**Az `index.html` 4,7 MB.** Minden termékkép base64-ben, közvetlenül a HTML-be van ágyazva. Ez azzal az előnnyel jár, hogy a bolt egyetlen fájl, és bárhonnan megnyitható – viszont minden oldalbetöltéskor a teljes 4,7 MB letöltődik, és a böngésző egyik képet sem tudja külön gyorsítótárazni.

Google Ads mellett ez pénzbe kerül: a lassú betöltés rontja a minőségi mutatót és növeli a visszafordulást. Ha élesben hirdetni fogsz, érdemes a képeket külön `images/` mappába kiszedni és `<img src="images/...">` hivatkozásokra cserélni – ettől a HTML néhány tíz kB-ra csökken, a képek pedig párhuzamosan és gyorsítótárazva töltődnek.

**Nyelv és pénznem.** A magyar/angol váltás és a Ft/€/$ váltás kliensoldali, `data-i18n` attribútumok és egy `I18N` objektum alapján. Új szöveg felvételekor mindkét nyelvi szótárba fel kell venni a kulcsot.

**Sütik.** Google Consent Mode v2 van bekötve, alapértelmezés szerint minden hozzájárulás megtagadva; a bannerben adott engedély után frissül. A választás a böngésző `localStorage`-ában, `hima_consent` kulcs alatt tárolódik.
