# 🐺 Werwolf - Real-Life Edition

Ein browserbasiertes Werwolf-Spiel für 5-10 Spieler, das im echten Leben gespielt wird - ohne Spielleiter!

## 🎮 So funktioniert's

1. **Spieler eingeben** - Ein Spielleiter gibt alle Namen ein
2. **Links verteilen** - Jeder Spieler bekommt einen persönlichen, verschlüsselten Link
3. **Rollen ansehen** - Spieler öffnen ihren Link und sehen ihre geheime Rolle
4. **Im echten Leben spielen** - Aktionen passieren jederzeit und überall!

## 🃏 Rollen

| Rolle | Team | Fähigkeit |
|-------|------|-----------|
| 🐺 Werwolf | Böse | Markiert Spieler zum Töten |
| 👁️ Seherin | Dorf | Kann Rollen anderer Spieler sehen |
| 🛡️ Leibwächter | Dorf | Schützt einen Spieler vor Angriffen |
| 🧙‍♀️ Hexe | Dorf | Kann wiederbeleben oder vergiften (je 1x) |
| 🏹 Jäger | Dorf | Erschießt beim Tod einen anderen Spieler |
| 👤 Dorfbewohner | Dorf | Stimmt bei Lynchungen ab |

## 📊 Rollenverteilung

- **5 Spieler:** 1🐺 1👁️ 1🛡️ 1🧙‍♀️ 1👤
- **6 Spieler:** 2🐺 1👁️ 1🛡️ 2👤
- **7 Spieler:** 2🐺 1👁️ 1🛡️ 1🧙‍♀️ 2👤
- **8 Spieler:** 3🐺 1👁️ 1🛡️ 1🧙‍♀️ 2👤
- **9 Spieler:** 3🐺 1👁️ 1🛡️ 1🧙‍♀️ 1🏹 2👤
- **10 Spieler:** 3🐺 1👁️ 1🛡️ 1🧙‍♀️ 1🏹 3👤

## 🏆 Siegbedingungen

- **🏠 Dorf gewinnt:** Alle Werwölfe sind tot
- **🐺 Werwölfe gewinnen:** Gleich viele oder mehr Werwölfe als Dorfbewohner

## 🔒 Sicherheit

- Alle Rollendaten sind clientseitig mit AES-GCM verschlüsselt
- Keine Serverkomponente nötig - läuft komplett im Browser
- Links sind einmalig und können nicht manipuliert werden

## 📱 Installation

Das Spiel kann als Progressive Web App (PWA) installiert werden:
- **iOS:** Teilen → "Zum Home-Bildschirm"
- **Android/Desktop:** "App installieren" Banner oder Browser-Menü

## 🚀 Deployment

Einfach die `index.html` auf einem beliebigen Webserver hosten - keine weiteren Abhängigkeiten!

```bash
# Beispiel mit Python
python -m http.server 8000

# Beispiel mit Node.js
npx serve .
```

## 📄 Lizenz

MIT License - Frei verwendbar für private und kommerzielle Zwecke.