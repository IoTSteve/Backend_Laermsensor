## NOISENSE ##

Noisesne ist ein System zur Darstellung von Livesensordaten mithilfe von LoRa. Die Sensornodes messen die Umgebungslautstärke und übermittlen diese als Dezibel Wert an eine Datenbank. Das Frontend liest deise dann aus der Datenbank aus und zeigt sie auf einer Karte in Markern an welche über Geodaten auf der Karte Plaziert werden.
Das System dient zur erleichterung der Planung von Lärmschutzmaßnahmen und dient als internes Tool den Stadtplanungsbeafutragten.
<br></br>
<br></br>

 ## Interaktion und Inbetriebnahme ##
Das Backend ist momentan auf dem Server der HfG via Jenkins gehostet und ist bereits zugreifbar unter folgendem link <https://soundsense.srv1.hfgiot.cloud/>
<p>
hier können bereits GET anfragen gesendet werden via Avdanced Rest client oder Postman. Unter "/posts" kann über einen GET Request schon der Datenbankinhalt abgefragt werden.
<p>
Bisher besteht allerdings noch ein CORS bug welcher es nicht zulässt POST Requests zu senden. dieser wird in im Zuge der Frontendimplementierung noch gefixed.
<p>
Über das Frontend kann man auch schon die datenbankinhalte abfragen und als plain text anzeigen lassen. Um es zu starten cloned man sich das Frontend Repo und führt npm run serve aus. Dann gibt man im Browser " http://localhost:'port'/files " ein und man sieht die Inhalte als plain text.
<p>
Alle bisherigen verzeichnisse
<p>
"/ " das homeverzechnis. Dies zeigt noch die Default Vue Komponenten an
<p>
"/about" 'This is an About Page'
<p>
"/register" Führt eine POST request aus mit einem zuvor definierten json Datensatz welcher aber durch einen CORS Error Timouted
<p>
"/files" Zeigt alle inhalte der Datenbank als plain Text an 


<br></br>
<br></br>
## Techflow ##

 ![Bild 1](techflow.jpg)  


<br></br>
<br></br>
 ## Kommende Features ##

 In den Kommenden versionen Wird noch das Fronend Weiterentwickelt mit funktionierender mapbox und der livedatenazeige.
 <br></br>
 Die verbindung der Nodes zum TTN funktioniert bereits allerdings werden noch keine daten gesendet. dies wird in kommenden versionen noch hinzugefügt.
 <br></br>
 Device aktivierung über einen QR Code Scanner welches diesen dann auf der Karte Plaziert.
<br></br>
<br></br>
 ## Links ##
 Fronend: <https://github.com/IoTSteve/sound-frontend>
<br></br>
Ausstellungsseite: <https://ausstellung.hfg-gmuend.de/w-2021/projekte/noisense>

<br></br>