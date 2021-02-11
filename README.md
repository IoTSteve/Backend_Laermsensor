## NOISENSE ##

Noisesne ist ein System zur Darstellung von Livesensordaten mithilfe von LoRa. Die Sensornodes messen die Umgebungslautstärke und übermittlen diese als Dezibel Wert an eine Datenbank. Das Frontend liest diese dann aus der Datenbank aus und zeigt sie auf einer Karte in Markern an welche über Geodaten auf der Karte Plaziert werden.
Das System dient zur erleichterung der Planung von Lärmschutzmaßnahmen und Unterstützt als internes Tool den Stadtplanungsbeafutragten bei seiner Arbeit.
<br></br>
<br></br>

 ## Interaktion und Inbetriebnahme ##
Das Backend ist momentan auf dem Server der HfG via Jenkins gehostet und ist bereits zugreifbar unter folgendem Link <https://soundsense.srv1.hfgiot.cloud/>
<p>
Hier können bereits GET Anfragen gesendet werden via Avdanced Rest client oder Postman. Unter "/posts" kann über einen GET Request schon der Datenbankinhalt abgefragt werden.
<p>
Bisher besteht allerdings noch ein CORS bug welcher es nicht zulässt POST Requests zu senden. Dieser wird in im Zuge der Frontendimplementierung noch gefixed.
<p>
Über das Frontend kann man auch schon die Datenbankinhalte abfragen und als plain Text anzeigen lassen. Um es zu starten cloned man sich das Frontend Repo und führt npm run serve aus. Dann gibt man im Browser " http://localhost:'port'/files " ein und man sieht die Inhalte als plain text.
<p>
Alle bisherigen Verzeichnisse:
<p>
"/ " das Homeverzechnis. Dies zeigt noch die default Vue Komponenten an
<p>
"/about" 'This is an About Page'
<p>
"/register" Führt eine POST request aus mit einem zuvor definierten json Datensatz welcher aber durch einen CORS Error Timouted
<p>
"/files" Zeigt alle Inhalte der Datenbank als plain Text an 


<br></br>
<br></br>
## Techflow ##

 ![Bild 1](techflow.jpg)  


<br></br>
<br></br>
 ## Kommende Features ##

 In den Kommenden Versionen wird noch das Frontend Weiterentwickelt mit funktionierender Mapbox und der Livedatenanzeige.
 <br></br>
 Die verbindung der Nodes zum TTN funktioniert bereits, allerdings werden noch keine Daten gesendet. Dies wird in kommenden Versionen noch hinzugefügt.
 <br></br>
 Device aktivierung über einen QR Code Scanner mit anschließender Markerplatzierung auf der Mapbox mit den zugehörigen GPS Daten des mobile Devices welches die Aktivierung durchgeführt hat.
<br></br>
<br></br>
 ## Links ##
 Frontend: <https://github.com/IoTSteve/sound-frontend>
<br></br>
Ausstellungsseite: <https://ausstellung.hfg-gmuend.de/w-2021/projekte/noisense>

<br></br>
