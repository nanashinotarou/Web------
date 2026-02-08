# Camera LP Detailed Design ("Make Life Delicious" Project)

## 1. Project Overview
- **Project Name:** Shimaneko Design "Camera Guide" LP
- **Mission:** 「Make Life Delicious」 - 日常に彩りと物語を付加する。
- **Theme:** 「ひだまりのアトリエ」 (Warm, Nostalgic, Gentle)
- **Goal:** スマホ(20万円)よりも中古一眼(10万円)の方が、表現の幅（=画用紙の広さ）が広がることを直感的に伝える。

## 2. Target Audience Analysis
| Target | Type | Focus | Key Trigger |
| :--- | :--- | :--- | :--- |
| **Sasami** (Designer) | Logical / Foodie | Cost-performance, Realistic details | "コスパ最強", "質感（シズル感）の再現性" |
| **Tuna** (Designer) | Emotional / Fashion | Aesthetic, Atmosphere | "エモい", "空気感", "背景ボケの美しさ" |

---

## 3. Content Strategy & Copywriting

### Section 1: Hero (Intro)
> Theme: 「空気感を撮る」
> Visual Idea: ファーストビューで、スマホで撮った「説明的な写真」と、一眼で撮った「物語のある写真」がゆっくりクロスフェードする。

- **Catchphrase (Main):** 「空気感まで、写せるかな。」
- **Sub Copy:** スマホのカメラは優秀です。でも、あなたの「こころ」まで写せているでしょうか？
- **Lead Text:**
  最新のiPhoneは20万円。
  でも、私たちがおすすめする「魔法の道具」は、
  中古で10万円もあれば揃います。
  
  「記録」から「表現」へ。
  しまねこデザインが提案する、新しい選択肢。

### Section 2: Concept (The "Why")
> Theme: 「センサーサイズ = 画用紙の大きさ」
> Visual Idea (SVG/CSS): 
> 小さな四角（スマホセンサー）と大きな四角（APS-C/Full Frame）を並べる。
> スマホ側は細いペンで塗りつぶそうとして必死なアニメーション。一眼側は大きな筆でゆったり描くアニメーション。

- **Headline:** 画用紙の大きさが、違うんです。
- **Body Copy:**
  スマホのカメラが高画質なのは、AIが「塗り絵」を頑張っているから。
  でも、もともとの画用紙（センサー）は、付箋サイズしかありません。
  
  一眼カメラの画用紙は、その約13倍から30倍。
  A3の画用紙に、光の絵の具で、あなたが自由に描く。
  そこには、AIには作れない「豊かな階調（グラデーション）」が生まれます。

### Section 3: Feature (The "Lens")
> Theme: 「レンズ = 魔法のメガネ」
> Visual Idea: レンズを覗くと世界が変わる（ホバーエフェクト）。

#### Case A: Macro Lens (for Sasami)
- **Headline:** 小さな世界の、大きな物語。
- **Target Message:**
  焼きたてのパンの湯気、フルーツのみずみずしい断面。
  マクロレンズなら、肉眼では見えない「シズル感」まで鮮明に。
  「おいしい」の瞬間を、もっと近くで。

#### Case B: Prime Lens (for Tuna)
- **Headline:** あやふやな光さえ、宝石に変える。
- **Target Message:**
  背景がとろけるようにボケる、単焦点レンズ。
  何気ない道端の花も、散らかった部屋の片隅も、
  レンズを通せば、映画のワンシーンのような「エモい」一枚に。

### Section 4: Comparison (Value Proposition)
> Theme: 「20万円の消費 vs 10万円の資産」

| | 最新ハイエンドスマホ | 中古一眼カメラ + オールドレンズ |
| :--- | :--- | :--- |
| **Price** | 約200,000円〜 | **約80,000円〜120,000円** |
| **Value** | 2年で陳腐化する「消費」 | 長く愛せる「資産」、レンズは一生モノ |
| **Output** | 誰が撮っても「正解」の絵 | あなたにしか撮れない「作品」 |

### Section 5: Gallery ("Hidamari" Scenery)
> Theme: 「これから撮りたい風景」
> Visual Idea: ポラロイド風のレイアウトで、少し斜めに配置。

- **Copy:** 
  ファインダーを覗くと、いつもの散歩道が
  「ひだまりのアトリエ」に変わります。
  
  さあ、カメラを持って出かけましょう。
  Make Life Delicious.

---

## 4. Technical Strategy

### Tech Stack
- **Framework:** None (Vanilla HTML5 / CSS3)
- **CSS Architecture:**
  - CSS Variables for color palette (`--color-base`, `--color-main-brown`, `--color-accent-orange`)
  - Modern CSS Grid/Flexbox for layout
- **Fonts:** Zen Maru Gothic (Import from Google Fonts)
- **Icons:** SVG Inline or Phosphor Icons (Lightweight)

### Interaction Design (Micro-interactions)
1.  **Scroll-Driven Animations:** `IntersectionObserver` を使用し、スクロールに合わせて要素がふわりと浮き上がる（`opacity`, `transform`）。
2.  **Parallax:** 背景の「水彩の滲み」テクスチャを、スクロール速度を変えて動かし、奥行きを出す。
3.  **Lens Focus Effect:** マウスホバーで、ぼやけた画像がピントの合った画像に切り替わる（CSS `filter: blur()` transition）。

---

## 5. Directory Structure Proposal

```
cameralp/
├── index.html          # Main LP structure
├── css/
│   ├── style.css       # Main styles (Variables, Reset, Typography)
│   ├── layout.css      # Grid/Flex structures
│   └── animation.css   # Keyframes & Transitions
├── js/
│   └── script.js       # IntersectionObserver setup
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── compare-sensor.svg  # Sensor size comparison
│   │   └── gallery/
│   └── fonts/          # (Optional: if self-hosting)
└── README.md
```
