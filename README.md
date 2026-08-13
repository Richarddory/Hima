# Hima – webshop

Statikus webshop (HTML + CSS + JS, keretrendszer nélkül), saját kosárral.
Fizetés: **Stripe Checkout** (bankkártya, Apple Pay, Google Pay, PayPal, Revolut Pay).
Üzemeltető: Keystone Dynamics Kft. · Domain: **himapets.com** · Kapcsolat: **info@himapets.com**

A bolt egyetlen kiszolgálóhoz kapcsolódik: a saját Cloudflare Workeredhez. Ez intézi a fizetést,
a rendeléseket és a statisztikát is. A telepítése a `hima-dashboard` csomag `TELEPITES.md` fájljában van.

---

## ⚠️ Élesítés – három lépés

### 1. A worker címe

Az `index.html` elején, a `<head>` legelső soraiban:

```html
<script>window.HIMA_API = 'IDE_JON_A_WORKER_CIME';</script>
```

Írd át a saját Cloudflare Worker címedre, pl. `https://hima-analytics.a-te-neved.workers.dev`.
Ez egy helyen áll, és ebből dolgozik a kosár, a fizetés és a mérés is.

Amíg helyőrző van benne: a bolt böngészhető, a kosár működik, de a „Tovább a fizetéshez" gomb
udvariasan jelzi, hogy a fizetés még nincs bekapcsolva. Nem hibázik, nem küld semmit.

### 2. Stripe

A workerben kell két titok (`npx wrangler secret put …`):

- `STRIPE_SECRET` – a Stripe titkos kulcsa (`sk_test_…`, majd élesben `sk_live_…`)
- `STRIPE_WEBHOOK_SECRET` – a webhook aláírás-titka (`whsec_…`)

Lépésről lépésre: `hima-dashboard/TELEPITES.md`, „Stripe" fejezet. Teszt bankkártya: `4242 4242 4242 4242`.

### 3. Domain rákötése (himapets.com)

1. A domain szolgáltatódnál GitHub Pages DNS-rekordok:
   - `A` a gyökérre: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` a `www` alnévre: `richarddory.github.io`
2. Repó → **Settings → Pages → Custom domain** → `himapets.com` → Save.
   (Hagyd, hogy a GitHub hozza létre a CNAME fájlt – így előbb ellenőrzi a DNS-t.)
3. Zöld pipa után kapcsold be az **Enforce HTTPS**-t.
4. A workerben a `SITE_URL` és az `ALLOWED_ORIGINS` is erre a címre mutasson (`wrangler.toml`).

Amíg a DNS nem áll be, a bolt a `richarddory.github.io/Hima/` címen működik – ilyenkor
a `wrangler.toml`-ban ez a cím szerepeljen a `SITE_URL`-ben, különben a Stripe rossz helyre térít vissza.

---

## ⚠️ Rólunk szekció – a telefonszám még helyőrző

Az `index.html`-ben, a `<section class="about" id="rolunk">` blokk alján:

```html
<!-- TELEFONSZÁM: írd át a valódira, vagy töröld ezt az egy sort -->
<a href="tel:+36000000000" class="about-tel">+36 XX XXX XXXX</a>
```

**Vagy írd át a saját számodra** (a `tel:` linkben szóköz nélkül, országhívóval: `tel:+3630...`),
**vagy töröld ezt a két sort** – a szekció enélkül is rendben néz ki, marad az e-mail.
Az ügyfélfogadási idő (`ab_hours`) az `I18N` szótárban van, magyarul és angolul is.

A szekció szövegei mind az `I18N`-ben vannak, `ab_` előtaggal (`ab_lead`, `ab_c1_t`, `ab_c1_d` …),
így a nyelvváltás automatikusan működik. A menübe is bekerült egy „Rólunk" pont (`#rolunk`).

## Kosárba épített ajánló (upsell)

Ha van valami a kosárban, alatta megjelenik 1-2 kapcsolódó termék **kedvezménnyel** – például
macska-WC mellé a ferde szájú tál -30%-kal, a karomvágó -25%-kal. Amit a vásárló már betett,
azt nem ajánlja fel újra.

Az ajánlómátrix az `index.html`-ben, a kosár blokkjában van (`var UPSELL = { … }`): terméknként
felsorolva, mit ajánljon és hány százalékkal. Ha új párosítást vagy más kedvezményt akarsz,
**két helyen** kell átírni:

1. `index.html` → `UPSELL` (ezt látja a vásárló),
2. `hima-dashboard/src/catalog.js` → kell benne egy `<termék>-promo<százalék>` tétel (ebből számol a fizetés),
   majd `npx wrangler deploy`.

Ha a kedvezményes tétel nincs benne a katalógusban, a fizetés egyszerűen kihagyja – ezért fontos a párban tartás.

## Hogyan működik a fizetés

1. A vásárló a „Kosárba" gombbal tesz a **saját kosárba** (a böngészőben tárolva, süti nélkül).
2. A „Tovább a fizetéshez" gomb elküldi a workernek, hogy **mely tételekből mennyit** kér.
3. A worker az **árat a saját katalógusából** veszi (`hima-dashboard/src/catalog.js`), nem abból, amit a
   böngésző küld – így a kosár átírásával nem lehet olcsóbban vásárolni.
4. A worker Stripe pénztárt nyit; a vásárló ott fizet (kártya, Apple Pay, Google Pay, PayPal, Revolut Pay).
5. Fizetés után visszatér a boltba, a kosár kiürül, és megjelenik a köszönő ablak.
6. A Stripe webhookja beírja a rendelést a **vezérlőpultodba** (rendelés, vásárló, bevétel).

A szállítási díj a pénztárban jelenik meg: 1 490 Ft belföldön, 6,90 € EU-ban, 7,90 $ egyéb.
Ezt a `hima-dashboard/src/stripe.js` `SHIPPING` blokkjában tudod átírni.

## Fájlok

| Fájl | Mi ez |
|---|---|
| `index.html` | a bolt – termékek, szövegek, stílus, kosár, ajánló, mérőkód |
| `images/hero.jpg` | **a nyitókép** – ezt cseréld a saját, nagy felbontású fotódra |
| `images/` | termékképek, logó, favicon, megosztási kép (`og-cover.jpg`) |
| `impresszum.html` · `aszf.html` · `adatkezeles.html` · `elallas.html` · `szallitas-fizetes.html` | magyar jogi oldalak |
| `imprint.html` · `terms.html` · `privacy.html` · `withdrawal.html` · `shipping-payment.html` | angol jogi oldalak |
| `agb.html` · `datenschutz.html` · `impressum.html` · `versand-zahlung.html` · `widerruf.html` · `furrito.html` | régi útvonalak, átirányító csonkok |
| `robots.txt` · `sitemap.xml` | keresőknek |

## Feltöltés GitHubra (böngészőből)

1. Csomagold ki a ZIP-et.
2. <https://github.com/Richarddory/Hima> → **Add file → Upload files**.
3. Jelöld ki a mappa **tartalmát** (fájlok **és** az `images` mappa), és húzd az ablakba.
   Ne a külső mappát húzd be, mert akkor alkönyvtárba kerül minden.
4. *Commit changes*, majd 1-2 perc múlva frissíts az oldalon (`Ctrl/Cmd + Shift + R`).

## Ha árat vagy terméket módosítasz

Két helyen kell ugyanazt átírni:

1. `index.html` → `var PRODUCTS = [...]` (ez látszik a vásárlónak),
2. `hima-dashboard/src/catalog.js` (ebből számol a fizetés), majd `npx wrangler deploy`.

Ha a kettő eltér, a vásárló a régi árat látja, de az újat fizeti – vagy fordítva.

## Nyitókép (hero)

A nyitóképet az `images/hero.jpg` fájl adja – **csak ezt kell kicserélni**, a szöveg és a
színátmenet automatikusan igazodik. Ajánlott méret: legalább 2000 × 1400 képpont, fekvő,
a lényeg a kép jobb-középső részén (a bal oldalra kerül a szöveg), a bal széle sötét.

A jelenlegi fájl a saját generált látványtervedből van kivágva (1066 × 694). Ez a legtöbb
képernyőn rendben van; ha nagy, retina monitoron is tűéles legyen, generáltasd újra a jelenetet
**szöveg nélkül, 2000 képpont szélesen**, és cseréld le vele ezt a fájlt.

A hero két rétegből áll: egy sötét alap (`#1B0C09`) és a fotó a jobb 74%-on, közöttük lágy
színátmenet (`.hero::after`). Ha világosabb vagy sötétebb alapot akarsz, ezt a három helyen
írd át: `.hero{background}`, `.hero::after` és a 900/700 képpontos töréspontok.

A hero alatti három előnyblokk (`<section class="trust">`) szövegei az `I18N` szótárban vannak,
`tr1_t … tr3_d` kulcsokkal – magyarul és angolul is.

## Jogi és adatvédelmi állapot

- Impresszum, ÁSZF, adatkezelés, elállás, szállítás – magyarul és angolul, kitöltve.
- A cookie-sáv és a Google Consent Mode v2 váz a helyén van (mérőkód jelenleg kikapcsolva).
- A statisztika süti nélküli és anonim; az adatkezelési tájékoztató 4. pontja írja le.
- A kosár a böngésző tárhelyét használja – ez a bolt működéséhez szükséges, hozzájárulás nélkül is jogszerű.
- **Számlázás:** magyar Kft.-ként minden rendelésről számlát kell kiállítani. Ezt sem a Stripe,
  sem a bolt nem teszi meg – Billingo vagy Számlázz.hu API-val automatizálható a workerből.

## Amit érdemes még megcsinálni

1. **Nyitókép cseréje** saját, nagy felbontású fotóra (lásd fent).
2. **Rólunk / GYIK szekció** – jelenleg semmi nem szól a márkáról; ez a legnagyobb bizalmi hiány.
3. **Vélemények** – 3-5 valódi vásárlói vélemény sokat javít a konverzión.
4. **Hero szöveg** – érdemes alá egy konkrét mondat arról, mit árulsz.
5. **Külön termékoldalak** – most minden termék a főoldalon van, így egy termékre nehéz Google-találatot kapni.
6. **Automatikus számlázás** – Billingo/Számlázz.hu bekötése a fizetési webhookba.
7. **Google Ads / GA4** – ha indítod, a mérőkód blokkot kapcsold vissza az `index.html` fejlécében.
