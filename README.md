<h3><u>Krav til opgaven</u></h3>
<h4>Dynamisk opbygning af query-string(url parametre)</h4>
<ul>
    <li>
        Hver gang brugeren foretager et valg (farve eller størrelse), skal dette tilføjes til URL’ens query-string.
    </li>
    <br />
    <li>
        Hvis værdien indeholder tegn, der er reserverede (som ex. &, ?, : osv.), skal de URL-encodes korrekt, så de sikkert kan bruges som url parametre.
    </li>
</ul>

<br />
<br />

<h3><u>Ekstra</u></h3>
<h4>Knappens tilstand</h4>
<ul>
    <li>
        Når brugeren <b>ikke har valgt noget</b>, skal knappen være <b>inaktiv</b> og vise teksten: <em><q>Vælg en størrelse</q></em>.
    </li>
    <br />
    <li>
        Hvis brugeren <b>kun mangler at vælge farve</b>, skal knappen stadig være <b>inaktiv</b> og vise teksten: <em><q>Vælg en farve</q></em>.
    </li>
    <br />
    <li>
        Når brugeren har valgt <b>både farve og størrelse</b>, skal knappen blive <b>aktiv</b>. Den skal nu fungere som et link, der fører brugeren til <b>payment route</b>. Her skal url parametrene med brugerens valg naturligvis medsendes.
    </li>
</ul>

<br />
<br />

<h3>Din opgave</h3>
<ol>
    <li>
        Opsætning af struktur og layout
    </li>
    <br />
    <li>
        Implementer en funktion, der opdaterer URL’ens query string, når brugeren foretager sine valg.
    </li>
    <br />
    <li>
        Håndter korrekt encoding af tegn i værdierne.
    </li>
    <br />
    <li>
        Implementer logikken, der styrer knappens tilstand baseret på brugerens valg.
    </li>
    <br />
    <li>
        Benyt url parametrenes værdier til at implementere korrekte værdier på betalingssiden
    </li>
<ol>