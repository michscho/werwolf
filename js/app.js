      const SECRET = "WerwolfSriLanka2024!";

      const ROLES = {
        werewolf: {
          name: "Werwolf",
          emoji: "🐺",
          team: "evil",
          teamName: "🐺 Team Werwolf",
          desc: "Du bist ein Werwolf! Eliminiere die WeRoaders ohne entdeckt zu werden.",
          action: `<strong>So tötest du:</strong>
            <p><strong>Option A - Einzeln:</strong></p>
            <ul>
              <li>Sei <strong>alleine</strong> mit dem Opfer</li>
              <li>Markiere das Opfer</li>
              <li>Mindestens ein weiterer Werwolf macht später dasselbe</li>
              <li>→ Nach allen Markierungen: tot</li>
            </ul>
            <p style="text-align:center; color:#f39c12; font-weight:bold;">— ODER —</p>
            <p><strong>Option B - Zusammen:</strong></p>
            <ul>
              <li><strong>Alle</strong> Werwölfe + Opfer allein im Raum</li>
              <li>Ohne andere Personen!</li>
              <li>→ Sofort tot!</li>
            </ul>
            <p>⚠️ Opfer weiß wer, darf es aber niemandem verraten!</p>
            <div class="special-rule">
              <strong>⚔️ Duell mit Hexe:</strong> Wenn du alleine mit der Hexe bist - wer zuerst handelt, überlebt! Markiere schneller als sie "Gift" sagt!
            </div>`,
          actionSolo: `<strong>So tötest du:</strong>
            <ul>
              <li>Sei <strong>alleine</strong> mit dem Opfer</li>
              <li>Markiere das Opfer</li>
              <li>→ Die Person ist <strong>sofort tot!</strong></li>
            </ul>
            <p>⚠️ Opfer weiß wer, darf es aber niemandem verraten!</p>
            <p style="margin-top:15px; padding:12px; background:rgba(231,76,60,0.2); border-radius:10px;">💡 Du bist der <strong>einzige Werwolf</strong> - sei besonders vorsichtig!</p>
            <div class="special-rule">
              <strong>⚔️ Duell mit Hexe:</strong> Wenn du alleine mit der Hexe bist - wer zuerst handelt, überlebt! Markiere schneller als sie "Gift" sagt!
            </div>`,
          descSolo: "Du bist der einzige Werwolf! Eliminiere die WeRoaders ohne entdeckt zu werden. Vertraue niemandem!",
        },
        seer: {
          name: "Seherin",
          emoji: "👁️",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Du kannst die wahre Identität anderer Spieler sehen!",
          action: `<strong>So nutzt du deine Gabe:</strong>
            <ul>
              <li>Sei <strong>alleine</strong> mit jemandem</li>
              <li>Bei 10+ Spielern: Bis zu eine weitere Person darf dabei sein (<strong>nur 1x pro Spiel!</strong>)</li>
              <li>Sag: <strong>"Zeig mir deine Rolle"</strong></li>
              <li>Person muss dir ihr Handy zeigen!</li>
            </ul>
            <p style="margin-top:15px; padding:12px; background:rgba(76,175,80,0.2); border-radius:10px;">💡 Vorsicht - verrätst du dich, bist du das nächste Ziel!</p>`,
        },
        guardian: {
          name: "Leibwächter",
          emoji: "🛡️",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Du kannst andere Spieler vor den Werwölfen beschützen!",
          action: `<strong>Schutz geben:</strong>
            <ul>
              <li>Sei <strong>alleine</strong> mit jemandem</li>
              <li>Bei 10+ Spielern: Bis zu eine weitere Person darf dabei sein (<strong>nur 1x pro Spiel!</strong>)</li>
              <li>Sag: <strong>"Du stehst unter meinem Schutz"</strong></li>
              <li>Gilt bis du jemand anderen schützt</li>
            </ul>
            <p><strong>Wenn Geschützter markiert oder von allen getötet wird:</strong></p>
            <ul>
              <li>Dieses Mal ungültig.</li>
              <li>Schutz ist danach verbraucht</li>
            </ul>`,
        },
        witch: {
          name: "Hexe",
          emoji: "🧙‍♀️",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Du besitzt zwei mächtige Tränke - setze sie weise ein!",
          action: `<strong>💚 Wiederbelebung (einmalig):</strong>
            <ul>
              <li>Sei <strong>alleine</strong> mit einer <strong>toten</strong> Person</li>
              <li>Bei 10+ Spielern: Eine weitere Person darf dabei sein (<strong>nur 1x pro Spiel!</strong>)</li>
              <li>Sag: <strong>"Ich belebe dich wieder"</strong></li>
              <li>Person lebt wieder!</li>
            </ul>
            <strong>💀 Gifttrank (einmalig):</strong>
            <ul>
              <li>Sei <strong>alleine</strong> mit jemandem</li>
              <li>Bei 10+ Spielern: Eine weitere Person darf dabei sein (<strong>nur 1x pro Spiel!</strong>)</li>
              <li>Sag: <strong>"Gift"</strong></li>
              <li>Sofort tot!</li>
            </ul>
            <div class="special-rule">
              <strong>⚔️ Duell mit Werwolf:</strong> Wenn du alleine mit einem Werwolf bist - wer zuerst handelt, überlebt! Sag "Gift" bevor er dich markiert!
            </div>`,
        },
        hunter: {
          name: "Jäger",
          emoji: "🏹",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Wenn du stirbst, nimmst du jemanden mit ins Grab!",
          action: `<strong>Deine letzte Kugel:</strong>
            <ul>
              <li>Wenn du stirbst und <strong>dabei bist:</strong></li>
              <li>Benenne sofort jemanden!</li>
              <li>Diese Person stirbt auch!</li>
            </ul>
            <div style="background:rgba(231,76,60,0.2); border:2px solid rgba(231,76,60,0.4); border-radius:12px; padding:15px; margin:15px 0;">
              <strong style="color:#e74c3c;">⚠️ Wichtige Einschränkung:</strong>
              <p style="margin-top:8px; margin-bottom:0;">Du darfst <strong>NICHT</strong> die Person benennen, die direkt für deinen Tod verantwortlich war!</p>
              <ul style="margin-top:10px; margin-bottom:0;">
                <li>Von Werwölfen getötet? → Keinen der Werwölfe benennen!</li>
                <li>Von Hexe vergiftet? → Nicht die Hexe benennen!</li>
                <li>Gelyncht? → Niemanden der Lynch-Gruppe benennen!</li>
              </ul>
            </div>`,
        },
        amor: {
          name: "Amor",
          emoji: "💘",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Du bist der Gott der Liebe! Vereine zwei Herzen.",
          action: `<strong>💕 Verlieben (beliebig oft wiederholbar):</strong>
            <ul>
              <li>Sei mit <strong>genau zwei Personen</strong> allein</li>
              <li>Bei 10+ Spielern: Bis zu eine weitere unbeteiligte Person darf dabei sein (<strong>nur 1x pro Spiel!</strong>)</li>
              <li>Sag: <strong>"Ihr seid verliebt"</strong></li>
              <li>⚠️ Nur <strong>ein aktives Paar</strong> gleichzeitig</li>
            </ul>
            <p><strong>💔 Effekt:</strong></p>
            <ul>
              <li>Stirbt eine verliebte Person, <strong>stirbt die andere sofort mit!</strong></li>
              <li>Beide am Ende am Leben = <strong>Bonus-Sieg!</strong></li>
            </ul>
            <p><strong>🔄 Neues Paar:</strong> Wenn das Paar gestorben ist, darfst du erneut verlieben!</p>`,
        },
        buddha: {
          name: "Buddha",
          emoji: "🧘",
          team: "neutral",
          teamName: "☯️ Erleuchteter",
          desc: "Strebe nach der totalen Erleuchtung aller Wesen!",
          action: `<strong>🎯 Dein Ziel:</strong>
            <ul>
              <li><strong>Team-Sieg:</strong> Gewinne mit WeRoadern wenn alle Wölfe tot</li>
              <li><strong>Solo-Sieg:</strong> Alle anderen Lebenden wurden erleuchtet!</li>
            </ul>
            <p><strong>🕊️ Erleuchtung = ROLLENTAUSCH:</strong></p>
            <ul>
              <li>Sei <strong>alleine</strong> mit jemandem</li>
              <li>Sag: <strong>"Ich erleuchte dich"</strong></li>
            </ul>
            <div style="background:rgba(243,156,18,0.25); border:2px solid rgba(243,156,18,0.4); border-radius:12px; padding:15px; margin:15px 0;">
              <strong style="color:#f39c12;">🔄 Rollentausch:</strong>
              <ul style="margin-top:10px;">
                <li>Die andere Person wird <strong>Buddha</strong></li>
                <li>Du übernimmst <strong>deren Rolle</strong></li>
                <li>Person gilt als "erleuchtet"</li>
              </ul>
            </div>`,
        },
        villager: {
          name: "WeRoader",
          emoji: "🎒",
          team: "good",
          teamName: "🏠 Team WeRoad",
          desc: "Ein WeRoader auf Reise - deine Stimme zählt!",
          action: `<strong>So lyncht ihr gemeinsam:</strong>
            <ul>
              <li><strong>Mindestens #Anzahl Werwölfe + 1 Personen</strong> einigen sich</li>
              <li>Auf dieselbe verdächtige Person</li>
              <li>→ Diese Person ist gelyncht!</li>
            </ul>
            <p style="margin-top:15px; padding:12px; background:rgba(76,175,80,0.2); border-radius:10px;">💡 Beobachte genau, wer sich mit wem heimlich trifft!</p>`,
        },
      };

      function getRoles(n) {
        const roleDistribution = {
          5: ["werewolf", "seer", "guardian", "witch", "villager"],
          6: ["werewolf", "werewolf", "seer", "guardian", "villager", "villager"],
          7: ["werewolf", "werewolf", "seer", "guardian", "witch", "villager", "villager"],
          8: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "villager", "villager"],
          9: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "villager", "villager"],
          10: ["werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "amor", "villager", "villager", "villager"],
          11: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "amor", "villager", "villager", "villager"],
          12: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "amor", "villager", "villager", "villager", "villager"],
          13: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "amor", "buddha", "villager", "villager", "villager", "villager"],
          14: ["werewolf", "werewolf", "werewolf", "seer", "guardian", "witch", "hunter", "amor", "buddha", "villager", "villager", "villager", "villager", "villager"],
        };
        return roleDistribution[n] || [];
      }

      function getWolfCount(n) {
        const wolfCounts = { 5: 1, 6: 2, 7: 2, 8: 3, 9: 3, 10: 2, 11: 3, 12: 3, 13: 3, 14: 3 };
        return wolfCounts[n] || 2;
      }

      const Crypto = {
        async key(pw) {
          const e = new TextEncoder();
          const k = await crypto.subtle.importKey("raw", e.encode(pw), "PBKDF2", false, ["deriveKey"]);
          return crypto.subtle.deriveKey(
            { name: "PBKDF2", salt: e.encode("werwolf-srilanka"), iterations: 100000, hash: "SHA-256" },
            k, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
          );
        },
        async enc(data, pw) {
          const k = await this.key(pw);
          const iv = crypto.getRandomValues(new Uint8Array(12));
          const enc = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, k, new TextEncoder().encode(JSON.stringify(data)));
          const c = new Uint8Array(iv.length + enc.byteLength);
          c.set(iv);
          c.set(new Uint8Array(enc), iv.length);
          return btoa(String.fromCharCode(...c)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        },
        async dec(str, pw) {
          try {
            const k = await this.key(pw);
            let b = str.replace(/-/g, "+").replace(/_/g, "/");
            while (b.length % 4) b += "=";
            const c = Uint8Array.from(atob(b), (x) => x.charCodeAt(0));
            const dec = await crypto.subtle.decrypt({ name: "AES-GCM", iv: c.slice(0, 12) }, k, c.slice(12));
            return JSON.parse(new TextDecoder().decode(dec));
          } catch { return null; }
        },
      };

      function toast(msg, ok = false) {
        document.querySelectorAll(".toast").forEach((t) => t.remove());
        const t = document.createElement("div");
        t.className = "toast";
        t.style.background = ok ? "linear-gradient(135deg, #4caf50, #2e7d32)" : "linear-gradient(135deg, #e74c3c, #c0392b)";
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 2500);
      }

      function showRules() {
        document.getElementById("rules-modal").classList.remove("hidden");
        document.getElementById("first-time-hint").classList.add("hidden");
        localStorage.setItem("rulesShown", "true");
      }

      function closeRules() { document.getElementById("rules-modal").classList.add("hidden"); }

      document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeRules(); });

      let deferredPrompt = null;
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById("install-banner").classList.remove("hidden");
      });

      function installApp() {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              document.getElementById("install-banner").classList.add("hidden");
              toast("App wird installiert!", true);
            }
            deferredPrompt = null;
          });
        } else {
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          if (isIOS) toast('Tippe auf Teilen → "Zum Home-Bildschirm"');
        }
      }

      document.addEventListener("DOMContentLoaded", async () => {
        const p = new URLSearchParams(location.search).get("p");
        if (p) {
          document.getElementById("admin-section").classList.add("hidden");
          document.getElementById("player-section").classList.remove("hidden");
          document.getElementById("install-banner").classList.add("hidden");
          document.getElementById("first-time-hint").classList.add("hidden");
          data = await Crypto.dec(p, SECRET);
          if (!data) { document.getElementById("error-card").classList.remove("hidden"); return; }
          document.getElementById("reveal-card").classList.remove("hidden");
          document.getElementById("player-name-preview").textContent = data.name;
        } else {
          if (!localStorage.getItem("rulesShown")) {
            setTimeout(() => { document.getElementById("first-time-hint").classList.remove("hidden"); }, 2000);
          }
        }
      });

      async function createGame() {
        const text = document.getElementById("player-names").value.trim();
        if (!text) return toast("Bitte Namen eingeben!");
        const names = text.split("\n").map((n) => n.trim()).filter((n) => n);
        if (names.length < 5) return toast("Mindestens 5 Spieler nötig!");
        if (names.length > 14) return toast("Maximal 14 Spieler möglich!");
        if (new Set(names.map((n) => n.toLowerCase())).size !== names.length) return toast("Keine doppelten Namen!");

        const roles = getRoles(names.length);
        for (let i = roles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [roles[i], roles[j]] = [roles[j], roles[i]];
        }

        const players = names.map((name, i) => ({ name, role: roles[i] }));
        const wolves = players.filter((p) => p.role === "werewolf").map((p) => p.name);
        const wolfCount = wolves.length;
        const playerCount = names.length;

        const container = document.getElementById("player-links");
        container.innerHTML = "";
        const base = location.href.split("?")[0].split("#")[0];

        for (const p of players) {
          const data = {
            name: p.name, role: p.role,
            wolves: p.role === "werewolf" ? wolves : [],
            soloWolf: wolves.length === 1 && p.role === "werewolf",
            wolfCount, playerCount,
          };
          const enc = await Crypto.enc(data, SECRET);
          const link = `${base}?p=${enc}`;
          container.innerHTML += `<div class="player-link"><span class="player-link-name">${p.name}</span><button class="btn-copy" onclick="copy(this,'${link}','${p.name}')">📋 Kopieren</button></div>`;
        }

        const count = {};
        players.forEach((p) => { const e = ROLES[p.role].emoji; count[e] = (count[e] || 0) + 1; });
        container.innerHTML += `<div class="info-box"><strong>Verteilte Rollen:</strong> ${Object.entries(count).map(([e, c]) => c + e).join(" ")}</div>`;

        document.getElementById("setup-card").classList.add("hidden");
        document.getElementById("links-card").classList.remove("hidden");
        toast("✅ Spiel erstellt!", true);
      }

      function copy(btn, link, playerName) {
        const inviteText = `🐺 Hilfe, Sri Lanka wird von Werwölfen befallen! 🇱🇰

Hey ${playerName}, du wurdest zu einer Runde Werwolf eingeladen! 🎭

Die Werwölfe haben es auf unsere WeRoad-Gruppe abgesehen... 😱

🏆 Gewinnen lohnt sich - es warten Elefantensticker auf euch! 🐘

Öffne diesen Link um deine geheime Rolle zu sehen:
${link}

⚠️ Zeig diesen Link niemandem - er ist nur für dich!`;

        navigator.clipboard.writeText(inviteText).catch(() => {
          const t = document.createElement("textarea");
          t.value = inviteText;
          t.style.cssText = "position:fixed;opacity:0";
          document.body.appendChild(t);
          t.select();
          document.execCommand("copy");
          document.body.removeChild(t);
        });
        btn.textContent = "✓ Kopiert";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "📋 Kopieren"; btn.classList.remove("copied"); }, 2000);
      }

      function resetGame() {
        document.getElementById("setup-card").classList.remove("hidden");
        document.getElementById("links-card").classList.add("hidden");
        document.getElementById("player-names").value = "";
      }

      function goHome() { location.href = location.pathname; }

      let data = null;

      function createSparkles() {
        const container = document.getElementById("sparkle-container");
        container.innerHTML = "";
        for (let i = 0; i < 20; i++) {
          const sparkle = document.createElement("div");
          sparkle.className = "sparkle";
          sparkle.style.left = Math.random() * 100 + "%";
          sparkle.style.top = Math.random() * 100 + "%";
          sparkle.style.setProperty("--tx", (Math.random() - 0.5) * 200 + "px");
          sparkle.style.setProperty("--ty", (Math.random() - 0.5) * 200 + "px");
          sparkle.style.animationDelay = Math.random() * 0.5 + "s";
          sparkle.style.background = Math.random() > 0.5 ? "#4caf50" : Math.random() > 0.5 ? "#fff" : "#ffb74d";
          container.appendChild(sparkle);
        }
      }

      function showRole() {
        if (!data) return;
        const revealCard = document.getElementById("reveal-card");
        const roleCard = document.getElementById("role-card");
        const flipInner = document.getElementById("card-flip-inner");

        flipInner.classList.add("flipping");
        revealCard.classList.add("revealing");

        setTimeout(() => {
          const r = ROLES[data.role];
          const emojiEl = document.getElementById("role-emoji");
          emojiEl.textContent = r.emoji;
          emojiEl.classList.add("bouncing");

          document.getElementById("role-name").textContent = r.name;
          const team = document.getElementById("role-team");
          team.textContent = r.teamName;
          team.className = "role-team " + r.team;

          document.getElementById("role-desc").innerHTML = data.soloWolf && r.descSolo ? `<p>${r.descSolo}</p>` : `<p>${r.desc}</p>`;

          let actionHtml = data.soloWolf && r.actionSolo ? r.actionSolo : r.action;
          if (data.wolfCount) actionHtml = actionHtml.replace(/#Anzahl Werwölfe \+ 1/g, `${data.wolfCount + 1}`);
          document.getElementById("role-action").innerHTML = actionHtml;

          if (data.role === "werewolf" && data.wolves && data.wolves.length > 1) {
            const others = data.wolves.filter((n) => n !== data.name);
            if (others.length > 0) {
              document.getElementById("teammates-list").innerHTML = others.map((n) => `<li>🐺 ${n}</li>`).join("");
              document.getElementById("teammates-section").classList.remove("hidden");
            }
          } else {
            document.getElementById("teammates-section").classList.add("hidden");
          }

          revealCard.classList.add("hidden");
          roleCard.classList.remove("hidden");
          roleCard.classList.add("revealing");
          createSparkles();

          setTimeout(() => {
            flipInner.classList.remove("flipping");
            revealCard.classList.remove("revealing");
            roleCard.classList.remove("revealing");
            emojiEl.classList.remove("bouncing");
          }, 1000);
        }, 500);
      }

      function hideRole() {
        document.getElementById("role-card").classList.add("hidden");
        document.getElementById("reveal-card").classList.remove("hidden");
        document.getElementById("teammates-section").classList.add("hidden");
        document.getElementById("card-flip-inner").classList.remove("flipping");
      }
    
