const { useEffect, useRef, useState } = React;
const UPI_ID = "8904848522@fam";
const ORDERS_STORAGE_KEY = "bloom-and-bind-orders";

const FLOWERS = [
  {
    id: "garden-rose",
    name: "Garden Rose",
    note: "Soft blush · romantic",
    price: 99,
    category: "Roses",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "red-rose",
    name: "Velvet Red Rose",
    note: "Classic crimson · timeless",
    price: 79,
    category: "Roses",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Red_rose_with_black_background.jpg/960px-Red_rose_with_black_background.jpg",
  },
  {
    id: "white-rose",
    name: "Ivory Rose",
    note: "Cream white · graceful",
    price: 89,
    category: "Roses",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/White_Rose_2015-04-01.jpg/960px-White_Rose_2015-04-01.jpg",
  },
  {
    id: "yellow-rose",
    name: "Sunshine Rose",
    note: "Bright yellow · cheerful",
    price: 79,
    category: "Roses",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/A_bright_yellow_rose.jpg/960px-A_bright_yellow_rose.jpg",
  },
  {
    id: "lavender-rose",
    name: "Lavender Rose",
    note: "Lilac tones · unexpected",
    price: 99,
    category: "Roses",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Wet_Purple_Rose_4-13-14_%2813979889721%29.jpg/960px-Wet_Purple_Rose_4-13-14_%2813979889721%29.jpg",
  },
  {
    id: "tulip",
    name: "French Tulip",
    note: "Butter yellow · joyful",
    price: 69,
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "peony",
    name: "Coral Peony",
    note: "Coral pink · lush",
    price: 129,
    category: "Romantic",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "daisy",
    name: "Wild Daisy",
    note: "Cream white · carefree",
    price: 39,
    category: "Wildflowers",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "sunflower",
    name: "Mini Sunflower",
    note: "Golden yellow · cheerful",
    price: 59,
    category: "Wildflowers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sunflower_head_2026_G1.jpg/960px-Sunflower_head_2026_G1.jpg",
  },
  {
    id: "gypsophila",
    name: "Gypsophila",
    note: "Baby’s breath · airy white",
    price: 49,
    category: "Wildflowers",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Close-up_of_baby%27s_breath_%28Gypsophila_paniculata%29_flowers.jpg/960px-Close-up_of_baby%27s_breath_%28Gypsophila_paniculata%29_flowers.jpg",
  },
  {
    id: "carnation",
    name: "Pink Carnation",
    note: "Ruffled pink · keepsake",
    price: 59,
    category: "Seasonal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Carnation_%28Dianthus_caryophyllus%29_in_Athens_on_June_23%2C_2023.jpg/960px-Carnation_%28Dianthus_caryophyllus%29_in_Athens_on_June_23%2C_2023.jpg",
  },
  {
    id: "orchid",
    name: "Moth Orchid",
    note: "Soft pink · sculptural",
    price: 119,
    category: "Seasonal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Phalaenopsis_c.v._orchid_%2849367895198%29.jpg/960px-Phalaenopsis_c.v._orchid_%2849367895198%29.jpg",
  },
  {
    id: "chrysanthemum",
    name: "Pink Chrysanthemum",
    note: "Blush pink · full bloom",
    price: 69,
    category: "Seasonal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Details_of_a_pink_Chrysanthemum_flower.jpg/960px-Details_of_a_pink_Chrysanthemum_flower.jpg",
  },
  {
    id: "ranunculus",
    name: "Ranunculus",
    note: "Apricot · delicate",
    price: 89,
    category: "Seasonal",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Ranunculus_asiaticus_%27Magic_Orange%27_Jaskier_azjatycki_2018-04-15_01.jpg",
  },
  {
    id: "lily",
    name: "White Lily",
    note: "Ivory white · graceful",
    price: 79,
    category: "Seasonal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Easter_lily_%28Lilium_longiflorum%29.jpg/960px-Easter_lily_%28Lilium_longiflorum%29.jpg",
  },
  {
    id: "eucalyptus",
    name: "Silver Dollar",
    note: "Silver Dollar eucalyptus · silvery green",
    price: 39,
    category: "Greens",
    image: "assets/silver-dollar.png",
  },
];

const ADDONS = [
  {
    id: "chocolate-bouquet",
    name: "Chocolate bouquet",
    note: "A sweet bouquet of chocolates",
    price: 299,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "mini-perfume",
    name: "Mini perfume",
    note: "A little keepsake fragrance",
    price: 249,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "chocolate-box",
    name: "Chocolate gift box",
    note: "A small box of sweet treats",
    price: 149,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=700&q=85",
  },
];

const WRAPPINGS = [
  { name: "Kraft paper", price: 0 },
  { name: "Blush tissue", price: 29 },
  { name: "Linen wrap", price: 49 },
];

const CATEGORIES = ["All flowers", "Roses", "Romantic", "Seasonal", "Wildflowers", "Greens"];
const POSITIONS = [
  { left: "25%", top: "6%" }, { left: "42%", top: "0%" }, { left: "59%", top: "7%" },
  { left: "17%", top: "28%" }, { left: "34%", top: "21%" }, { left: "52%", top: "23%" },
  { left: "68%", top: "28%" }, { left: "27%", top: "43%" }, { left: "49%", top: "43%" },
];

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function App() {
  const [storedOrders, setStoredOrders] = useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(ORDERS_STORAGE_KEY) || "[]");
      if (!Array.isArray(saved)) throw new Error("Saved orders are not in the expected format.");
      return { orders: saved, error: "" };
    } catch {
      return { orders: [], error: "Saved orders could not be read from this browser." };
    }
  });
  const [adminNotice, setAdminNotice] = useState("");
  const orders = storedOrders.orders;
  const [quantities, setQuantities] = useState({});
  const [addonQuantities, setAddonQuantities] = useState({});
  const [category, setCategory] = useState("All flowers");
  const [searchTerm, setSearchTerm] = useState("");
  const [wrapping, setWrapping] = useState(WRAPPINGS[0].name);
  const [step, setStep] = useState("builder");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [order, setOrder] = useState(null);
  const [qrStatus, setQrStatus] = useState("Preparing secure payment QR…");
  const qrContainer = useRef(null);

  const visibleFlowers = FLOWERS.filter((flower) => {
    const matchesCategory = category === "All flowers" || flower.category === category;
    const searchText = `${flower.name} ${flower.note} ${flower.category}`.toLowerCase();
    return matchesCategory && searchText.includes(searchTerm.trim().toLowerCase());
  });
  const chosenFlowers = FLOWERS.filter((flower) => quantities[flower.id] > 0);
  const chosenAddons = ADDONS.filter((addon) => addonQuantities[addon.id] > 0);
  const totalStems = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  const flowerTotal = chosenFlowers.reduce((sum, flower) => sum + flower.price * quantities[flower.id], 0);
  const addonTotal = chosenAddons.reduce((sum, addon) => sum + addon.price * addonQuantities[addon.id], 0);
  const wrapPrice = WRAPPINGS.find((option) => option.name === wrapping).price;
  const subtotal = flowerTotal + addonTotal + (totalStems > 0 ? wrapPrice : 0);
  const deliveryFee = subtotal > 0 && subtotal < 499 ? 40 : 0;
  const total = subtotal + deliveryFee;

  useEffect(() => {
    if (step !== "delivery" || paymentMethod !== "upi" || !qrContainer.current) return;
    if (typeof window.QRCode !== "function") {
      setQrStatus("QR generation is unavailable. Please try again later.");
      return;
    }

    const paymentUri = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent("Bloom & Bind")}&am=${total.toFixed(2)}&cu=INR&tn=${encodeURIComponent("Bloom and Bind bouquet order")}`;
    qrContainer.current.replaceChildren();
    setQrStatus("Preparing payment QR…");
    try {
      new window.QRCode(qrContainer.current, {
        text: paymentUri,
        width: 184,
        height: 184,
        colorDark: "#263322",
        colorLight: "#ffffff",
      });
      const generatedImage = qrContainer.current.querySelector("img");
      if (generatedImage) generatedImage.alt = `UPI payment QR for ${formatPrice(total)}`;
      setQrStatus("");
    } catch {
      setQrStatus("Could not create the QR. Please try again later.");
    }
  }, [paymentMethod, step, total]);

  function changeQuantity(setter, id, delta) {
    setter((current) => {
      const nextQuantity = Math.max(0, (current[id] || 0) + delta);
      const next = { ...current };
      if (nextQuantity === 0) delete next[id];
      else next[id] = nextQuantity;
      return next;
    });
  }

  function submitOrder(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newOrder = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      pincode: formData.get("pincode"),
      payment: paymentMethod,
      reference: `BB${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      flowers: chosenFlowers.map((flower) => ({
        name: flower.name,
        quantity: quantities[flower.id],
        unitPrice: flower.price,
      })),
      addons: chosenAddons.map((addon) => ({
        name: addon.name,
        quantity: addonQuantities[addon.id],
        unitPrice: addon.price,
      })),
      flowerTotal,
      addonTotal,
      wrapping,
      wrapPrice: totalStems ? wrapPrice : 0,
      deliveryFee,
      total,
      paymentStatus: paymentMethod === "cod" ? "Due on delivery" : "Unverified",
    };
    const nextOrders = [newOrder, ...orders];
    try {
      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(nextOrders));
    } catch {
      setStoredOrders((current) => ({
        ...current,
        error: "This order could not be saved in this browser. Check browser storage and try again.",
      }));
      return;
    }
    setStoredOrders({ orders: nextOrders, error: "" });
    setAdminNotice("");
    setOrder(newOrder);
    setStep("confirmation");
  }

  return (
    <>
      <header className="site-header">
        <div className="container-fluid h-100 px-4 px-lg-5 d-flex align-items-center justify-content-between">
          <a className="brand" href="#" aria-label="Bloom and Bind home"><span className="brand-mark">✿</span> bloom &amp; bind</a>
          <nav className="d-flex align-items-center gap-3 gap-sm-4">
            {step === "admin" ? (
              <button className="header-action" onClick={() => { setAdminNotice(""); setStep("builder"); }}>Shop</button>
            ) : (
              <>
                <a href="#builder" className="header-link d-none d-sm-inline">Build a bouquet</a>
                <a href="#our-flowers" className="header-link d-none d-sm-inline">Our flowers</a>
              </>
            )}
            <button className="header-action admin-nav" onClick={() => { setAdminNotice(""); setStep("admin"); }}>
              Admin <span className="admin-count">{orders.length}</span>
            </button>
            <button className="bag-button" aria-label={`Shopping bag, ${totalStems} stems`}>
              <span aria-hidden="true">♧</span><span className="bag-count">{totalStems}</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="page-shell" id="builder">
        {step !== "admin" && <section className="intro">
          <div className="intro-row d-flex justify-content-between align-items-end">
            <div>
              <div className="eyebrow">The Bloom &amp; Bind flower studio</div>
              <h1>Your flowers, your way.</h1>
              <p className="intro-copy">Florist-picked stems, gathered fresh and hand-tied just for you.</p>
            </div>
            <div className="step-line" aria-label="Bouquet builder progress">
              <div className={`step-item ${step === "builder" ? "active" : ""}`}><span className="step-number">1</span><span>Choose flowers</span></div>
              <span className="step-rule"></span>
              <div className={`step-item ${step !== "builder" ? "active" : ""}`}><span className="step-number">2</span><span>Delivery &amp; payment</span></div>
            </div>
          </div>
        </section>}

        {storedOrders.error && <div className="storage-alert" role="alert">{storedOrders.error}</div>}

        {step === "builder" && (
          <div className="builder-layout">
            <section className="catalog-section" id="our-flowers">
              <div className="section-heading">
                <div><h2>Choose your blooms</h2><p>Build a bouquet with the colours and flowers you love.</p></div>
                <span className="eyebrow d-none d-sm-inline">{FLOWERS.length} varieties</span>
              </div>
              <label className="flower-search">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search roses, lilies, wildflowers..."
                  aria-label="Search flowers"
                />
                {searchTerm && <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear flower search">×</button>}
              </label>
              <div className="filter-row" aria-label="Filter flowers">
                {CATEGORIES.map((item) => (
                  <button key={item} className={`filter-button ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="flower-grid">
                {visibleFlowers.map((flower) => {
                  const quantity = quantities[flower.id] || 0;
                  return (
                    <article className="flower-card" key={flower.id}>
                      <img className="flower-photo" src={flower.image} alt={`${flower.name} flowers`} loading="lazy" />
                      <span className="flower-badge">{flower.category === "Roses" ? "ROSE" : flower.category.toUpperCase()}</span>
                      <div className="flower-card-body">
                        <div className="flower-title-line">
                          <h3 className="flower-title">{flower.name}</h3>
                          <span className="flower-price">{formatPrice(flower.price)}<small>/stem</small></span>
                        </div>
                        <p className="flower-note">{flower.note}</p>
                        {quantity === 0 ? (
                          <button className="add-button" onClick={() => changeQuantity(setQuantities, flower.id, 1)}>＋ Add to bouquet</button>
                        ) : (
                          <div className="quantity-control" aria-label={`${flower.name} quantity`}>
                            <button onClick={() => changeQuantity(setQuantities, flower.id, -1)} aria-label={`Remove one ${flower.name}`}>−</button>
                            <span>{quantity} {quantity === 1 ? "stem" : "stems"}</span>
                            <button onClick={() => changeQuantity(setQuantities, flower.id, 1)} aria-label={`Add one ${flower.name}`}>＋</button>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
              {visibleFlowers.length === 0 && (
                <div className="no-flowers">
                  <h3>No stems found</h3>
                  <p>Try another flower name or choose a different collection.</p>
                  <button type="button" className="filter-button" onClick={() => { setSearchTerm(""); setCategory("All flowers"); }}>View all flowers</button>
                </div>
              )}
              <div className="section-heading addon-heading">
                <div><h2>Make it extra special</h2><p>Add a little treat to your flower delivery.</p></div>
                <span className="eyebrow d-none d-sm-inline">Gift add-ons</span>
              </div>
              <div className="flower-grid addon-grid">
                {ADDONS.map((addon) => {
                  const quantity = addonQuantities[addon.id] || 0;
                  return (
                    <article className="flower-card" key={addon.id}>
                      <img className="flower-photo" src={addon.image} alt={addon.name} loading="lazy" />
                      <div className="flower-card-body">
                        <div className="flower-title-line">
                          <h3 className="flower-title">{addon.name}</h3>
                          <span className="flower-price">{formatPrice(addon.price)}</span>
                        </div>
                        <p className="flower-note">{addon.note}</p>
                        {quantity === 0 ? (
                          <button className="add-button" onClick={() => changeQuantity(setAddonQuantities, addon.id, 1)}>＋ Add gift</button>
                        ) : (
                          <div className="quantity-control" aria-label={`${addon.name} quantity`}>
                            <button onClick={() => changeQuantity(setAddonQuantities, addon.id, -1)} aria-label={`Remove one ${addon.name}`}>−</button>
                            <span>{quantity} added</span>
                            <button onClick={() => changeQuantity(setAddonQuantities, addon.id, 1)} aria-label={`Add one ${addon.name}`}>＋</button>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <aside className="summary-card" aria-label="Your bouquet summary">
            <div className="summary-top">
              <div className="summary-title-row">
                <h2 className="summary-title">Your bouquet</h2>
                <span className="edit-label">{totalStems} {totalStems === 1 ? "stem" : "stems"}</span>
              </div>
              <div className="bouquet-preview" aria-label="Bouquet preview">
                {totalStems === 0 ? (
                  <div className="empty-preview"><span className="empty-flower">✿</span><span>Your bouquet will bloom here</span></div>
                ) : (
                  <>
                    <div className="preview-stems"></div>
                    <div className="flower-arrangement">
                      {chosenFlowers.flatMap((flower) => Array.from({ length: quantities[flower.id] }, () => flower)).slice(0, 9).map((flower, index) => (
                        <img key={`${flower.id}-${index}`} className="preview-flower" src={flower.image} alt="" style={POSITIONS[index]} />
                      ))}
                    </div>
                    <div className="wrapper-shape"></div><div className="ribbon"></div>
                  </>
                )}
                <span className="preview-caption">{totalStems ? "Hand gathered just for you" : "Pick a stem to get started"}</span>
              </div>
            </div>

            <div className="selected-list">
              {chosenFlowers.length === 0 && chosenAddons.length === 0 ? <p className="empty-list">Your chosen flowers and gifts will appear here.</p> : (
                <>
                  {chosenFlowers.map((flower) => (
                    <div className="selected-row" key={flower.id}>
                      <img className="selected-thumb" src={flower.image} alt="" />
                      <span className="selected-name">{flower.name} <span className="selected-qty">× {quantities[flower.id]}</span></span>
                      <span className="selected-cost">{formatPrice(flower.price * quantities[flower.id])}</span>
                    </div>
                  ))}
                  {chosenAddons.map((addon) => (
                    <div className="selected-row" key={addon.id}>
                      <img className="selected-thumb" src={addon.image} alt="" />
                      <span className="selected-name">{addon.name} <span className="selected-qty">× {addonQuantities[addon.id]}</span></span>
                      <span className="selected-cost">{formatPrice(addon.price * addonQuantities[addon.id])}</span>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="summary-details">
              <label className="wrap-label" htmlFor="wrap-style">Choose your wrap</label>
              <select id="wrap-style" className="wrap-select" value={wrapping} onChange={(event) => setWrapping(event.target.value)}>
                {WRAPPINGS.map((option) => <option key={option.name} value={option.name}>{option.name}{option.price ? ` (+${formatPrice(option.price)})` : " (included)"}</option>)}
              </select>
              <div className="total-line"><span>Flowers · {totalStems} {totalStems === 1 ? "stem" : "stems"}</span><span>{formatPrice(flowerTotal)}</span></div>
              <div className="total-line"><span>Gift add-ons</span><span>{formatPrice(addonTotal)}</span></div>
              <div className="total-line"><span>Gift wrap</span><span>{totalStems ? (wrapPrice ? formatPrice(wrapPrice) : "Included") : "—"}</span></div>
              <div className="total-line"><span>Delivery</span><span>{subtotal === 0 ? "—" : deliveryFee ? formatPrice(deliveryFee) : "Free"}</span></div>
              <div className="total-line grand"><span>Total</span><span>{formatPrice(total)}</span></div>
              <button className="checkout-button" onClick={() => setStep("delivery")} disabled={!totalStems && chosenAddons.length === 0}>Continue to delivery <span aria-hidden="true">→</span></button>
              <p className="delivery-note"><span aria-hidden="true">♡</span> ₹40 delivery · Free over ₹499</p>
            </div>
          </aside>
          </div>
        )}

        {step === "delivery" && (
          <div className="checkout-layout">
            <form className="delivery-card" onSubmit={submitOrder}>
              <button className="back-link" type="button" onClick={() => setStep("builder")}>← Back to your bouquet</button>
              <div className="section-heading delivery-heading">
                <div><h2>Where should we deliver?</h2><p>Fresh flowers, on their way to someone special.</p></div>
              </div>
              <div className="form-grid">
                <div className="field-group">
                  <label htmlFor="delivery-name">Full name</label>
                  <input id="delivery-name" name="name" autoComplete="name" required placeholder="Recipient’s name" />
                </div>
                <div className="field-group">
                  <label htmlFor="delivery-phone">Mobile number</label>
                  <input id="delivery-phone" name="phone" type="tel" autoComplete="tel" inputMode="numeric" pattern="[0-9]{10}" required placeholder="10-digit phone number" />
                </div>
                <div className="field-group field-wide">
                  <label htmlFor="delivery-address">Street address</label>
                  <textarea id="delivery-address" name="address" autoComplete="street-address" rows="3" required placeholder="House / flat, street, area" />
                </div>
                <div className="field-group">
                  <label htmlFor="delivery-city">City</label>
                  <input id="delivery-city" name="city" autoComplete="address-level2" required placeholder="City" />
                </div>
                <div className="field-group">
                  <label htmlFor="delivery-pincode">PIN code</label>
                  <input id="delivery-pincode" name="pincode" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{6}" required placeholder="6-digit PIN code" />
                </div>
              </div>
              <fieldset className="payment-options">
                <legend>Choose a payment method</legend>
                <label className={`payment-option ${paymentMethod === "upi" ? "selected" : ""}`}>
                  <input type="radio" name="payment" value="upi" checked={paymentMethod === "upi"} onChange={() => setPaymentMethod("upi")} />
                  <span className="payment-icon">↗</span><span><strong>UPI</strong><small>Pay using any UPI app</small></span>
                </label>
                <label className={`payment-option ${paymentMethod === "card" ? "selected" : ""}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                  <span className="payment-icon">▤</span><span><strong>Credit or debit card</strong><small>Visa, Mastercard and RuPay</small></span>
                </label>
                <label className={`payment-option ${paymentMethod === "cod" ? "selected" : ""}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                  <span className="payment-icon">₹</span><span><strong>Cash on delivery</strong><small>Pay when your flowers arrive</small></span>
                </label>
                {paymentMethod === "upi" && (
                  <div className="upi-payment-panel">
                    <div className="upi-qr-frame">
                      <div ref={qrContainer} role="img" aria-label={`UPI payment QR for ${formatPrice(total)}`} />
                    </div>
                    <div className="upi-payment-info">
                      <strong>Scan to pay {formatPrice(total)}</strong>
                      <span className="copy-status" role="status">{qrStatus}</span>
                    </div>
                  </div>
                )}
                <p className="payment-demo-note">
                  UPI payment is not automatically verified in this demo. Please confirm payment in your UPI app.
                </p>
              </fieldset>
              <button className="checkout-button place-order-button" type="submit">Place order · {formatPrice(total)} <span aria-hidden="true">→</span></button>
            </form>
            <aside className="checkout-summary">
              <h2 className="summary-title">Order summary</h2>
              <p>{totalStems} {totalStems === 1 ? "flower stem" : "flower stems"} · {chosenAddons.length} gift add-ons</p>
              {[...chosenFlowers.map((item) => ({ ...item, quantity: quantities[item.id] })), ...chosenAddons.map((item) => ({ ...item, quantity: addonQuantities[item.id] }))].map((item) => (
                <div className="checkout-item" key={item.id}><span>{item.name} × {item.quantity}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>
              ))}
              <div className="checkout-item"><span>Gift wrap</span><strong>{totalStems ? (wrapPrice ? formatPrice(wrapPrice) : "Included") : "—"}</strong></div>
              <div className="checkout-item"><span>Delivery</span><strong>{deliveryFee ? formatPrice(deliveryFee) : "Free"}</strong></div>
              <div className="checkout-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
              <p className="checkout-delivery-tip">{subtotal < 499 ? `Add ${formatPrice(499 - subtotal)} more for free delivery.` : "You unlocked free delivery!"}</p>
            </aside>
          </div>
        )}

        {step === "confirmation" && order && (
          <section className="confirmation-card" aria-live="polite">
            <div className="confirmation-flower">✿</div>
            <div className="eyebrow">Order received</div>
            <h2>Thank you, {order.name}!</h2>
            <p>Your flowers are being prepared with care. We’ll contact you at {order.phone} with delivery updates.</p>
            <div className="confirmation-details">
              <div><span>Order number</span><strong>{order.reference}</strong></div>
              <div><span>Delivering to</span><strong>{order.address}, {order.city} {order.pincode}</strong></div>
              <div><span>Payment</span><strong>{order.payment === "cod" ? "Cash on delivery" : order.payment === "upi" ? "UPI (not verified)" : "Card (demo)"}</strong></div>
              <div><span>Order total</span><strong>{formatPrice(total)}</strong></div>
            </div>
            <button className="checkout-button confirmation-button" onClick={() => { setStep("builder"); setOrder(null); }}>Continue shopping</button>
          </section>
        )}
        {step === "admin" && (
          <section className="admin-page">
            <div className="admin-page-heading">
              <div>
                <div className="eyebrow">Store overview</div>
                <h1>Orders dashboard</h1>
                <p className="intro-copy">Orders placed in this browser are listed here.</p>
              </div>
              <button className="back-link" onClick={() => { setAdminNotice(""); setStep("builder"); }}>← Back to shop</button>
            </div>
            <div className="admin-demo-warning" role="note">
              Demo admin: orders are stored only in this browser and this page has no sign-in protection.
              UPI and card orders are unverified; connect a secure backend and payment provider before using this for a live store.
            </div>
            {adminNotice && <div className="storage-alert" role="alert">{adminNotice}</div>}
            <div className="admin-stats">
              <article className="admin-stat"><span>Orders received</span><strong>{orders.length}</strong></article>
              <article className="admin-stat"><span>Order value</span><strong>{formatPrice(orders.reduce((sum, savedOrder) => sum + Number(savedOrder.total || 0), 0))}</strong></article>
              <article className="admin-stat"><span>Payments verified</span><strong>{orders.filter((savedOrder) => savedOrder.paymentStatus === "Paid").length}</strong></article>
            </div>
            <div className="admin-orders-heading">
              <div><h2>Recent orders</h2><p>Payment method and status are shown for every order.</p></div>
            </div>
            {orders.length === 0 ? (
              <div className="admin-empty"><span className="empty-flower">✿</span><h3>No orders yet</h3><p>Completed demo orders will appear here.</p></div>
            ) : (
              <div className="admin-order-list">
                {orders.map((savedOrder) => (
                  <article className="admin-order-card" key={savedOrder.reference}>
                    <div className="admin-order-top">
                      <div><span className="admin-order-ref">{savedOrder.reference}</span><span className="admin-order-date">{new Date(savedOrder.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</span></div>
                      <strong className="admin-order-total">{formatPrice(savedOrder.total)}</strong>
                    </div>
                    <div className="admin-order-columns">
                      <div>
                        <h3>Customer &amp; delivery</h3>
                        <p><strong>{savedOrder.name}</strong><br />{savedOrder.phone}<br />{savedOrder.address}, {savedOrder.city} {savedOrder.pincode}</p>
                      </div>
                      <div>
                        <h3>Payment</h3>
                        <p><strong>{savedOrder.payment === "upi" ? "UPI" : savedOrder.payment === "card" ? "Credit/debit card" : "Cash on delivery"}</strong><br />
                          <span className={`payment-status ${savedOrder.paymentStatus === "Paid" ? "paid" : ""}`}>{savedOrder.paymentStatus}</span>
                        </p>
                      </div>
                      <div>
                        <h3>Items</h3>
                        <ul className="admin-item-list">
                          {[...(savedOrder.flowers || []), ...(savedOrder.addons || [])].map((item, index) => (
                            <li key={`${savedOrder.reference}-${index}`}>{item.name} × {item.quantity} <span>{formatPrice(item.unitPrice * item.quantity)}</span></li>
                          ))}
                          <li>{savedOrder.wrapping} wrap <span>{savedOrder.wrapPrice ? formatPrice(savedOrder.wrapPrice) : "Included"}</span></li>
                          <li>Delivery <span>{savedOrder.deliveryFee ? formatPrice(savedOrder.deliveryFee) : "Free"}</span></li>
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
        <footer className="footer-note">
          Fresh from our growers, made by hand, sent with love. &nbsp;✿
          <span className="photo-credits">
            Photos: <a href="https://commons.wikimedia.org/wiki/File:Ranunculus_asiaticus_%27Magic_Orange%27_Jaskier_azjatycki_2018-04-15_01.jpg" target="_blank" rel="noreferrer">Agnieszka Kwiecień (Nova), CC BY-SA 4.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Sunflower_head_2026_G1.jpg" target="_blank" rel="noreferrer">George Chernilevsky, CC BY 4.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Easter_lily_(Lilium_longiflorum).jpg" target="_blank" rel="noreferrer">Dandy1022, CC BY-SA 4.0</a>
            {" · "}
            User-provided Silver Dollar flower photo
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Close-up_of_baby%27s_breath_(Gypsophila_paniculata)_flowers.jpg" target="_blank" rel="noreferrer">Avenue, CC BY-SA 3.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Red_rose_with_black_background.jpg" target="_blank" rel="noreferrer">Laitche, CC BY-SA 4.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:White_Rose_2015-04-01.jpg" target="_blank" rel="noreferrer">Bijay Chaurasia, CC BY-SA 4.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:A_bright_yellow_rose.jpg" target="_blank" rel="noreferrer">Spring’s Flowers, CC0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Wet_Purple_Rose_4-13-14_(13979889721).jpg" target="_blank" rel="noreferrer">inkknife_2000, CC BY-SA 2.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Carnation_(Dianthus_caryophyllus)_in_Athens_on_June_23,_2023.jpg" target="_blank" rel="noreferrer">George E. Koronaios, CC BY-SA 2.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Phalaenopsis_c.v._orchid_(49367895198).jpg" target="_blank" rel="noreferrer">geoff mckay, CC BY 2.0</a>
            {" · "}
            <a href="https://commons.wikimedia.org/wiki/File:Details_of_a_pink_Chrysanthemum_flower.jpg" target="_blank" rel="noreferrer">th_norge, CC BY 4.0</a>
          </span>
        </footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
