// The full menu data (all 350+ items from the Palm Tree Menu Book)
const menuData = [
  {
    category: "APPETIZERS مقبلات",
    items: [
      { name_en: "French Fries", name_ar: "بطاطس مقلية" },
      { name_en: "Aloo Chop", name_ar: "ألو تشوب" },
      { name_en: "Vegetable Chop", name_ar: "قطع الخضار" },
      { name_en: "Paneer Pakoda", name_ar: "جبن باكودا" },
      { name_en: "Onion Bhajia", name_ar: "بصل بهاجيا" },
      { name_en: "Vegetable Pakoda", name_ar: "باكودا الخضار" },
      { name_en: "Vegetable Cutlets", name_ar: "شرحات الخضار" },
      { name_en: "Hara bhara Kabab", name_ar: "هارا بهارا كباب" },
      { name_en: "Baby Corn Chilli", name_ar: "بيبي كورن تشيلي" },
      { name_en: "Paneer Manchurian", name_ar: "جبن منشوريا" },
      { name_en: "Mix Samosa", name_ar: "مزيج السمبوسة" },
      { name_en: "Chicken Samosa", name_ar: "سمبوسة الدجاج" },
      { name_en: "Chicken Pakoda", name_ar: "باكودا الدجاج" },
      { name_en: "Chicken Lollipop", name_ar: "لولي بوب الدجاج" },
      { name_en: "Chicken Majestic", name_ar: "دجاج ماجيستيك" },
      { name_en: "Chicken Cutlet", name_ar: "كفتة الدجاج" },
      { name_en: "Chicken Spring Roll", name_ar: "لفائف الدجاج الربيعية" },
      { name_en: "Garlic Chicken", name_ar: "دجاج بالثوم" },
      { name_en: "Shazmi Chicken", name_ar: "دجاج شازمي" },
      { name_en: "Mutton Mince Samosa", name_ar: "سمبوسة لحم الغنم المفروم" },
      { name_en: "Mutton Spring Roll", name_ar: "لفائف لحم الغنم الربيعية" },
      { name_en: "Golden Chicken", name_ar: "دجاج ذهبي" },
      { name_en: "Black Pepper Chicken", name_ar: "دجاج بالفلفل الأسود" },
      { name_en: "Chicken 555", name_ar: "دجاج 555" },
      { name_en: "Apollo Chicken", name_ar: "دجاج أبولو" },
      { name_en: "Dragon Chicken", name_ar: "دجاج التنين" },
      { name_en: "BBQ Chicken Wings", name_ar: "أجنحة دجاج باربيكيو" },
      { name_en: "Lemon Chicken", name_ar: "دجاج بالليمون" },
      { name_en: "Dynamite Chicken", name_ar: "دجاج دايناميت" },
      { name_en: "Mutton Chilli", name_ar: "لحم الغنم الحار" },
      { name_en: "Mutton Ghee Roast", name_ar: "لحم الغنم المشوي بالسمن" },
      { name_en: "Shrimps Bombay Bite", name_ar: "روبيان وجبة بومباي" },
      { name_en: "Fried Prawns Tempura", name_ar: "روبيان مقلي تمبورا" },
      { name_en: "Chilli Fish", name_ar: "سمك حار" },
      { name_en: "Fish Manchurian", name_ar: "سمك منشوريان" },
      { name_en: "Fish 65", name_ar: "سمك 65" },
      { name_en: "Loose Prawns", name_ar: "روبيان سائب" },
      { name_en: "Prawns Manchurian", name_ar: "روبيان منشوريان" },
      { name_en: "Chilli Garlic Prawns", name_ar: "روبيان بالثوم الحار" },
      { name_en: "Prawns Amareswari", name_ar: "روبيان أماريسواري" },
      { name_en: "Dynamite Prawns", name_ar: "روبيان دايناميت" },
      { name_en: "Fish Pepper Fry", name_ar: "سمك مقلي بالفلفل" },
      { name_en: "Prawns 65", name_ar: "روبيان 65" },
      { name_en: "Prawns Chilli", name_ar: "روبيان حار" }
    ]
  },
  {
    category: "SOUPS الشوربة",
    items: [
      { name_en: "Tomato Soup", name_ar: "شوربة الطماطم" },
      { name_en: "Vegetable Hot 'N' Sour", name_ar: "خضار حارة وحامضة" },
      { name_en: "Chicken Hot 'N' Sour", name_ar: "دجاج حار وحامض" },
      { name_en: "Sweet Corn Vegetable", name_ar: "خضروات الذرة الحلوة" },
      { name_en: "Lentil Soup", name_ar: "شوربة العدس" },
      { name_en: "Sweet Corn Chicken", name_ar: "دجاج الذرة الحلوة" },
      { name_en: "Vegetable Manchow", name_ar: "مانشو الخضار" },
      { name_en: "Mushroom Soup", name_ar: "شوربة الفطر" },
      { name_en: "Chicken Soup", name_ar: "شوربة الدجاج" },
      { name_en: "Chicken Manchow Soup", name_ar: "شوربة دجاج مانشو" },
      { name_en: "Sea Food Soup", name_ar: "شوربة المأكولات البحرية" },
      { name_en: "Cream of Mushroom", name_ar: "شوربة كريمة الفطر" },
      { name_en: "Cream Of Chicken", name_ar: "شوربة كريمة الدجاج" },
      { name_en: "Lemon Coriander Chicken", name_ar: "شوربة دجاج بالكزبرة والليمون" },
      { name_en: "Chicken Clear Soup", name_ar: "شوربة دجاج صافية" },
      { name_en: "Veg Clear Soup", name_ar: "شوربة خضار صافية" },
      { name_en: "Tom Yum Soup", name_ar: "شوربة توم يام" },
      { name_en: "Spinach Soup", name_ar: "شوربة سبانخ" }
    ]
  },
  {
    category: "SALAD سلطة",
    items: [
      { name_en: "Arabic Salad", name_ar: "سلطة عربية" },
      { name_en: "Heaven Salad", name_ar: "سلطة الجنة" },
      { name_en: "Russian Salad", name_ar: "سلطة روسية" },
      { name_en: "Chicken Salad", name_ar: "سلطة دجاج" },
      { name_en: "Hummus Salad", name_ar: "سلطة حمص" },
      { name_en: "Fattoush Salad", name_ar: "سلطة فتوش" },
      { name_en: "Tabbouleh Salad", name_ar: "سلطة تبولة" },
      { name_en: "Green Salad", name_ar: "سلطة خضراء" },
      { name_en: "Kachumber Salad", name_ar: "سلطة الكاشومبر" },
      { name_en: "Raita", name_ar: "ريتا" }
    ]
  },
   {
    category: "GRILLADES مشويات",
    items: [
      { name_en: "Kabab-E- Hazarvi", name_ar: "كباب الهزاري" },
      { name_en: "Reshmi Kabab", name_ar: "ريشمي كباب" },
      { name_en: "Chicken Tikka", name_ar: "دجاج تكا" },
      { name_en: "Seekh Kabab", name_ar: "سيخ كباب" },
      { name_en: "Tandoori Chicken Full", name_ar: "دجاج تندوري كامل" },
      { name_en: "Tandoori Chicken Half", name_ar: "نصف دجاج تندوري" },
      { name_en: "Fish Tikka", name_ar: "سمك تكا" },
      { name_en: "Mix Grill Platter", name_ar: "طبق مشويات مشكلة" },
      { name_en: "Fish Tandoori", name_ar: "تندوري السمك" },
      { name_en: "Malai Tikka", name_ar: "مالاي تكا" },
      { name_en: "Tangdi Kabab", name_ar: "تانجدي كباب" },
      { name_en: "Sultani Kebab", name_ar: "كباب سلطاني" },
      { name_en: "Gilafi Seekh Kebab", name_ar: "جيلافي سيخ كباب" },
      { name_en: "Lazeez Chicken Kebab", name_ar: "عزيز كباب دجاج" },
      { name_en: "Noorani Seekh Kebab", name_ar: "نوراني سيخ كباب" },
      { name_en: "Lemon Tikka", name_ar: "ليمون تكا" },
      { name_en: "Lasooni Kebab", name_ar: "لسوني كباب" },
      { name_en: "Zafrani Kebab", name_ar: "كباب زعفراني" },
      { name_en: "Hariyali Kabab", name_ar: "هارييالي كباب" },
      { name_en: "Chapli Kebab", name_ar: "تشابلي كباب" }
    ]
  },
   {
    category: "VEGETABLES خضروات",
    items: [
      { name_en: "Stuffed Capsicum Tomato", name_ar: "المطعم المحشو بالفلفل" },
      { name_en: "Dum Aloo Kashmiri", name_ar: "دم ألو كشميري" },
      { name_en: "Navratan Korma", name_ar: "نافرتان كورما" },
      { name_en: "Malai Kofta", name_ar: "مالاي كفتة" },
      { name_en: "Aloo Mumtaz", name_ar: "ألو ممتاز" },
      { name_en: "Aloo Gobi Banarasi", name_ar: "ألو جوبى بانارسي" },
      { name_en: "Bhindi Masala", name_ar: "بهيندي ماسالا" },
      { name_en: "Baingan Bhartha", name_ar: "باينجان بهاراتا" },
      { name_en: "Chana Masala", name_ar: "تشان ماسالا" },
      { name_en: "Mushroom & Peas Masala", name_ar: "المشروم والبازلاء ماسالا" },
      { name_en: "Baingan Bhindi", name_ar: "باينجان بهيندي" },
      { name_en: "Aloo Bhindi Fry", name_ar: "ألو بهيندي فراي" },
      { name_en: "Dum Aloo", name_ar: "دم ألو" },
      { name_en: "Aloo Gobi Masala", name_ar: "ألو جوبى ماسالا" },
      { name_en: "Gobi 65", name_ar: "جوبى 65" },
      { name_en: "Gobi Manchurian", name_ar: "جوبى منشوريان" },
      { name_en: "Navratan Curry", name_ar: "نافرتان كاري" },
      { name_en: "Baby Corn Jalfrezi", name_ar: "بيبي كورن جالفريزي" },
      { name_en: "Baby Corn Mushroom", name_ar: "بيبي كورن مشروم" },
      { name_en: "Veg. Jaipuri", name_ar: "خضار جايبوري" },
      { name_en: "Veg. Jalfrezi", name_ar: "خضار جالفريزي" },
      { name_en: "Veg. Kolhapuri", name_ar: "خضار كولهابوري" },
      { name_en: "Veg. Kofta Curry", name_ar: "خضار كفتة كاري" },
      { name_en: "Veg. Kadai", name_ar: "خضار كداي" },
      { name_en: "Veg. 65", name_ar: "خضار 65" },
      { name_en: "Veg. Tawa Curry", name_ar: "خضار توا كاري" },
      { name_en: "Veg Hyderbadi", name_ar: "الخضر حيدرابادي" },
      { name_en: "Paneer Korma", name_ar: "جبن كورما" },
      { name_en: "Paneer Butter Masala", name_ar: "جبن زبدة ماسالا" },
      { name_en: "Paneer Kadai", name_ar: "جبن كداي" },
      { name_en: "Paneer Chilli", name_ar: "جبن تشيلي" },
      { name_en: "Paneer Tikka Masala", name_ar: "جبن تكا ماسالا" },
      { name_en: "Paneer Kolhapouri", name_ar: "جبن كولهابوري" },
      { name_en: "Paneer Jalfrezi", name_ar: "جبن جالفريزي" },
      { name_en: "Paneer Kofta Curry", name_ar: "جبن كفتة بالكاري" },
      { name_en: "Paneer Palak", name_ar: "جبن بالاك" },
      { name_en: "Paneer 65", name_ar: "جبن 65" },
      { name_en: "Paneer Lababdar", name_ar: "جبن لابابدار" },
      { name_en: "Paneer Chatpat", name_ar: "جبن شاتبات" },
      { name_en: "Paneer Lajawab", name_ar: "جبن لوجواب" },
      { name_en: "Paneer Rogan Josh", name_ar: "جبن روغن جوش" },
      { name_en: "Dal Makhani", name_ar: "دال مخلني" },
      { name_en: "Dal Ganga Jamuna", name_ar: "دال جانجا جامونا" },
      { name_en: "Dal Thadka", name_ar: "دال تادكا" },
      { name_en: "Mix Veg Curry", name_ar: "مزيج الخضر بالكاري" },
      { name_en: "Veg Kundhan Kassa", name_ar: "الخضر كوندهان كاسا" },
      { name_en: "Aloo Bhindi Masala", name_ar: "ألو بهيندي ماسالا" },
      { name_en: "Bhindi Fry", name_ar: "بهيندي فراي" },
      { name_en: "Tawa Paneer", name_ar: "توا بانير" },
      { name_en: "Malai Paneer", name_ar: "مالاي بانير" },
      { name_en: "Shahi Paneer", name_ar: "شاهي بانير" },
      { name_en: "Tawa Veg", name_ar: "توا الخضر" }
    ]
  },
   {
    category: "CHICKEN دجاج",
    items: [
      { name_en: "Butter Chicken Masala", name_ar: "دجاج بالزبدة ماسالا" },
      { name_en: "Chicken Tikka Masala", name_ar: "دجاج تكا ماسالا" },
      { name_en: "Chicken Shajahani", name_ar: "دجاج شاجهاني" },
      { name_en: "Chicken Kolhapuri", name_ar: "دجاج كولهابوري" },
      { name_en: "Chicken Kundan Curry", name_ar: "دجاج كوندان بالكاري" },
      { name_en: "Chicken Masala", name_ar: "دجاج ماسالا" },
      { name_en: "Chicken Korma", name_ar: "دجاج كورما" },
      { name_en: "Chicken 65", name_ar: "دجاج 65" },
      { name_en: "Chicken Jalfrezi", name_ar: "دجاج جالفريزي" },
      { name_en: "Chicken Kadai", name_ar: "دجاج كداي" },
      { name_en: "Chicken Handi", name_ar: "هندي دجاج" },
      { name_en: "Chicken Mughlai", name_ar: "دجاج مغولي" },
      { name_en: "Chicken Curry", name_ar: "كاري الدجاج" },
      { name_en: "Chicken Jaipuri", name_ar: "دجاج جايبوري" },
      { name_en: "Chicken Sukka", name_ar: "سوكها دجاج" },
      { name_en: "Chicken Saagwala", name_ar: "دجاج ساجوالا" },
      { name_en: "Chicken Achari", name_ar: "دجاج أشاري" },
      { name_en: "Chicken Punjabi", name_ar: "دجاج بنجابي" },
      { name_en: "Chicken Hyderbadi", name_ar: "دجاج حيدرابادي" },
      { name_en: "Reshmi Chicken Masala", name_ar: "ريشمي دجاج ماسالا" },
      { name_en: "Chicken Afghani", name_ar: "دجاج أفغاني" },
      { name_en: "Chicken Do Pyaza", name_ar: "دجاج دو بيازا" },
      { name_en: "Chicken Lababdar", name_ar: "لابابدار دجاج" },
      { name_en: "Tandoori Chicken Masala", name_ar: "تندوري دجاج ماسالا" },
      { name_en: "Dum Ka Chicken", name_ar: "دم كا دجاج" },
      { name_en: "Chicken Hara Masala", name_ar: "دجاج هارا ماسالا" }
    ]
  },
   {
    category: "BEEF لحم بقر",
    items: [
      { name_en: "Beef Vindaloo", name_ar: "لحم بقر فيندالو" },
      { name_en: "Beef Fry", name_ar: "لحم بقر مقلي" },
      { name_en: "Beef Pepper Fry", name_ar: "لحم بقر مقلي بالفلفل" },
      { name_en: "Beef Jalfrezi", name_ar: "لحم بقر جالفريزي" },
      { name_en: "Beef Chilli Fry", name_ar: "لحم بقر مقلي بالفلفل الحار" },
      { name_en: "Beef Coconut Fry", name_ar: "لحم بقر بجوز الهند مقلي" },
      { name_en: "Beef Talawa", name_ar: "تلاوة لحم" },
      { name_en: "Beef Bhuna", name_ar: "لحم بقر بهونا" },
      { name_en: "Beef Kassa", name_ar: "لحم بقر كاسا" }
    ]
  },
   {
    category: "MUTTON لحم الضأن",
    items: [
      { name_en: "Mutton Korma", name_ar: "لحم الضأن كورما" },
      { name_en: "Keema Mutton", name_ar: "كيما لحم الضأن" },
      { name_en: "Mutton Do Pyaza", name_ar: "لحم الضأن دو بياز" },
      { name_en: "Mutton Rogan Josh", name_ar: "لحم الضأن روجان جوش" },
      { name_en: "Mutton Handi", name_ar: "لحم الضأن هاندي" },
      { name_en: "Aloo Gosht", name_ar: "ألو جوشت" },
      { name_en: "Mutton Afghani", name_ar: "لحم الضأن أفغاني" },
      { name_en: "Mutton Saagwala", name_ar: "لحم الضأن ساجوالا" },
      { name_en: "Mutton Masala", name_ar: "لحم الضأن ماسالا" },
      { name_en: "Mutton Kadai", name_ar: "لحم الضأن كادي" },
      { name_en: "Mutton Chilli", name_ar: "لحم الضأن بارد" },
      { name_en: "Mutton Fry", name_ar: "لحم الضأن مقلي" },
      { name_en: "Mutton Pepper", name_ar: "فلفل لحم الضأن" },
      { name_en: "Mutton Roast", name_ar: "لحم الضأن مشوي" },
      { name_en: "Mutton Coconut Fry", name_ar: "لحم الضأن بجوز الهند مقلي" },
      { name_en: "Daal Gosht", name_ar: "دال جوشت" },
      { name_en: "Bhindi Gosht", name_ar: "بهيندي جوشت" },
      { name_en: "Mutton Mughlai", name_ar: "لحم الضأن مغولي" },
      { name_en: "Mutton Hyderabadi", name_ar: "لحم الضأن حيدربادي" },
      { name_en: "Mutton Kolhapuri", name_ar: "لحم الضأن كولهابوري" },
      { name_en: "Mutton Bhuna Dry", name_ar: "لحم الضأن بهونا جاف" },
      { name_en: "Dum Ka Mutton", name_ar: "دوم كا لحم الضأن" }
    ]
  },
  {
    category: "SIZZLER & PASTA سيزلر و باستا",
    items: [
      { name_en: "Chicken BBQ Sizzler", name_ar: "دجاج مشوي على الفحم" },
      { name_en: "Chicken Sizzler", name_ar: "دجاج مشوي على الفحم" },
      { name_en: "Mix Sizzler", name_ar: "مزيج من المقبلات" },
      { name_en: "Seafood Mix Sizzler", name_ar: "مزيج المأكولات البحرية" },
      { name_en: "Chicken Pesto Pasta", name_ar: "باستا الدجاج والبيستو" },
      { name_en: "Chicken Alfredo Pasta", name_ar: "باستا الدجاج والفريدو" },
      { name_en: "Red Sauce Chicken Pasta", name_ar: "باستا الدجاج بالصلصة الحمراء" },
      { name_en: "Red Sauce Veg Pasta", name_ar: "باستا الخضار بالصلصة الحمراء" }
    ]
  },
   {
    category: "PALM TREE SPECIAL لذة النخيل خاص",
    items: [
      { name_en: "Veg Thali", name_ar: "طبق الخضار", price: 26 },
      { name_en: "Chicken Thali", name_ar: "طبق الدجاج", price: 28 },
      { name_en: "Mutton Thali", name_ar: "طبق لحم الضأن", price: 30 },
      { name_en: "Fish Thali", name_ar: "طبق السمك", price: 33 },
      { name_en: "Grilled BBQ Fish", name_ar: "سمك مشوي بالباربكيو", price: 40 },
      { name_en: "Chicken Schezwan", name_ar: "لحم بقر جوز الهند مقلي", price: 35 },
      { name_en: "Chicken Tawa Masala", name_ar: "تناوة لحم", price: 34 },
      { name_en: "Prawns Schezwan", name_ar: "لحم بوتنا", price: 39 },
      { name_en: "Peri Peri Chicken", name_ar: "دجاج بيري بيري", price: 38 },
      { name_en: "Pathar Ka Chicken", name_ar: "دجاج باتر كا", price: 38 }
    ]
  },
  {
    category: "SEA FOOD المأكولات البحرية",
    items: [
      { name_en: "Fried Fish Tomato Masala", name_ar: "سمك مقلي بالطماطم والبهارات", price: "Seasonal Rates" },
      { name_en: "Fish Curry", name_ar: "كاري السمك", price: "Seasonal Rates" },
      { name_en: "Goan Fish Curry", name_ar: "كاري السمك من غوا", price: "Seasonal Rates" },
      { name_en: "Prawns Masala", name_ar: "ماسالا الروبيان", price: "Seasonal Rates" },
      { name_en: "Prawns Masala Curry", name_ar: "كاري ماسالا الروبيان", price: "Seasonal Rates" },
      { name_en: "Sea-Food Jalfrezi", name_ar: "جالفريزي المأكولات البحرية", price: "Seasonal Rates" },
      { name_en: "Fish Masala", name_ar: "ماسالا السمك", price: "Seasonal Rates" },
      { name_en: "Fish Chilli", name_ar: "سمك الفلفل الحار", price: "Seasonal Rates" },
      { name_en: "Fish Ginger", name_ar: "سمك بالزنجبيل", price: "Seasonal Rates" },
      { name_en: "Fish Korma", name_ar: "سمك كورما", price: "Seasonal Rates" },
      { name_en: "Prawns Kolhapuri", name_ar: "روبيان كولهابوري", price: "Seasonal Rates" },
      { name_en: "Prawns Kadai", name_ar: "روبيان كاداي", price: "Seasonal Rates" },
      { name_en: "Prawn in Schezwan Sauce", name_ar: "روبيان في صلصة شزوان", price: "Seasonal Rates" },
      { name_en: "Fish Fry", name_ar: "سمك مقلي", price: "Seasonal Rates" },
      { name_en: "Fish Tikka Masala", name_ar: "سمك تيكا ماسالا", price: "Seasonal Rates" },
      { name_en: "Tomato Fish", name_ar: "سمك بالطماطم", price: "Seasonal Rates" },
      { name_en: "Ginger Prawns", name_ar: "روبيان بالزنجبيل", price: "Seasonal Rates" },
      { name_en: "Achari Prawns", name_ar: "أشاري روبيان", price: "Seasonal Rates" },
      { name_en: "Prawns Butter Masala", name_ar: "روبيان بالزبدة ماسالا", price: "Seasonal Rates" }
    ]
  },
  {
    category: "RICE أرز",
    items: [
      { name_en: "Chicken Biriyani (Arabic Special)", name_ar: "برياني دجاج (عربي خاص)", price: 25 },
      { name_en: "Zafrani Dum Biriyani", name_ar: "زعفراني دوم برياني", price: 28 },
      { name_en: "Chicken Dum Biriyani", name_ar: "دجاج دوم برياني", price: 27 },
      { name_en: "Chicken 65 Biriyani", name_ar: "برياني 65 برياني", price: 26 },
      { name_en: "Mutton Biriyani", name_ar: "برياني لحم الضأن", price: 27 },
      { name_en: "Beef Biriyani", name_ar: "برياني لحم بقري", price: 26 },
      { name_en: "Masala Biriyani", name_ar: "ماسالا برياني", price: 19 },
      { name_en: "Vegetable Biriyani", name_ar: "برياني خضار", price: 19 },
      { name_en: "Prawns Biriyani", name_ar: "برياني روبيان", price: 29 },
      { name_en: "Pilaf Rice", name_ar: "أرز بيلاف", price: 16 },
      { name_en: "Plain Steam Rice", name_ar: "أرز بخاري عادي", price: 9 },
      { name_en: "Jeera Fried Rice", name_ar: "جيرا فايد رايس", price: 16 },
      { name_en: "Vegetable Pulao", name_ar: "بولاو الخضار", price: 17 },
      { name_en: "Kashmiri Pulao", name_ar: "بولاو كشميري", price: 23 },
      { name_en: "Peas Pulao", name_ar: "البازلاء بولاو", price: 16 },
      { name_en: "Pudina Pulao", name_ar: "بودينا بولاو", price: 16 },
      { name_en: "Cashew Paneer Pulao", name_ar: "كاجو بانير بولاو", price: 25 },
      { name_en: "Tawa Veg Pulao", name_ar: "تاوا فيج بولاو", price: 25 },
      { name_en: "Ghee Rice", name_ar: "أرز بالسمن", price: 16 }
    ]
  },
   {
    category: "ROTI & NAAN روتي، نان",
    items: [
      { name_en: "Naan", name_ar: "نان", price: 2 },
      { name_en: "Tandoori Roti", name_ar: "تندوري روتي", price: 1 },
      { name_en: "Butter Naan", name_ar: "زبدة نان", price: 3 },
      { name_en: "Chapati", name_ar: "جباتي بر", price: 1 },
      { name_en: "Wheat Paratha", name_ar: "باراثا القمح", price: 2 },
      { name_en: "Paratha", name_ar: "جباتي أبيض", price: 2 },
      { name_en: "Pudina Paratha", name_ar: "بودينا باراثا", price: 4 },
      { name_en: "Tandoori Paratha", name_ar: "تندوري باراثا", price: 3 },
      { name_en: "Ceylon Paratha", name_ar: "سيلان باراثا", price: 3 },
      { name_en: "Gobi Paratha", name_ar: "جوبى باراثا", price: 3 },
      { name_en: "Aloo Paratha", name_ar: "ألو باراثا", price: 3 },
      { name_en: "Coin Paratha", name_ar: "عملة باراثا", price: 2 },
      { name_en: "Paneer Paratha", name_ar: "بانير باراثا", price: 3 },
      { name_en: "Ghee Paratha", name_ar: "سمن باراثا", price: 3 },
      { name_en: "Veg Stuffed Kulcha", name_ar: "كولشا محشوة بالخضار", price: 6 },
      { name_en: "Chicken Stuffed Kulcha", name_ar: "كولشا محشوة بالدجاج", price: 6 },
      { name_en: "Plain Kulcha", name_ar: "كولشا عادي", price: 4 },
      { name_en: "Butter Kulcha", name_ar: "زبدة كولشا", price: 4 },
      { name_en: "Paneer Kulcha", name_ar: "بانير كولشا", price: 6 },
      { name_en: "Garlic Naan or Onion Kulcha", name_ar: "الثوم نان أو البصل كولشا", price: 4 },
      { name_en: "Keema Naan or Stuffed Paratha", name_ar: "كيما نان أو باراثا محشوة", price: 6 }
    ]
  },
   {
    category: "CHINESE الصين",
    items: [
      { name_en: "Veg. Manchurian", name_ar: "منشوريا نباتية", price: 23 },
      { name_en: "Sweet & Sour Vegetable", name_ar: "خضروات حلوة وحامضة", price: 28 },
      { name_en: "Shrimps Manchurian", name_ar: "جمبري منشوريا", price: 29 },
      { name_en: "Shrimps in Garlic Sauce", name_ar: "جمبري بصلصة الثوم", price: 35 },
      { name_en: "Fried Chilli Chicken", name_ar: "دجاج مقلي بالفلفل الحار", price: 28 },
      { name_en: "Chicken Manchurian", name_ar: "دجاج منشوريا", price: 28 },
      { name_en: "Chicken in Ginger Sauce", name_ar: "دجاج بصلصة الزنجبيل", price: 28 },
      { name_en: "Sweet-n-Sour Chicken", name_ar: "دجاج حلو وحامض", price: 35 },
      { name_en: "Vegetable Fried Rice", name_ar: "أرز مقلي بالخضروات", price: 17 },
      { name_en: "Chicken Fried Rice", name_ar: "أرز مقلي بالدجاج", price: 25 },
      { name_en: "Mixed Fried Rice", name_ar: "أرز مقلي متنوع", price: 25 },
      { name_en: "Shrimps Fried Rice", name_ar: "أرز مقلي بالجمبري", price: 29 },
      { name_en: "Chicken Schezwan Fried Rice", name_ar: "أرز مقلي بالدجاج شيتشوان", price: 28 },
      { name_en: "Mix Schezwan Fried Rice", name_ar: "أرز مقلي شيتشوان متنوع", price: 29 },
      { name_en: "Chicken 555 Fried Rice", name_ar: "أرز مقلي 555", price: 28 },
      { name_en: "Paneer Fried Rice", name_ar: "أرز مقلي بالبانير", price: 25 },
      { name_en: "Veg Schezwan Fried Rice", name_ar: "أرز مقلي بالخضروات شيتشوان", price: 20 },
      { name_en: "Egg Fried Rice", name_ar: "أرز مقلي بالبيض", price: 23 },
      { name_en: "Vegetable Hakka Noodles", name_ar: "نودلز هاكا بالخضروات", price: 25 },
      { name_en: "Mixed Hakka Noodles", name_ar: "نودلز هاكا المختلطة", price: 29 },
      { name_en: "Shrimps Hakka Noodles", name_ar: "نودلز هاكا بالجمبري", price: 29 },
      { name_en: "Shrimps in Ginger Sauce", name_ar: "روبيان بصلصة الزنجبيل", price: 35 },
      { name_en: "Veg American Chop Suey", name_ar: "تشوب سوي أمريكي نباتي", price: 28 },
      { name_en: "Chicken American Chop Suey", name_ar: "تشوب سوي أمريكي بالدجاج", price: 30 },
      { name_en: "Veg Chinese Chop Suey", name_ar: "تشوب سوي صيني نباتي", price: 28 },
      { name_en: "Chicken Chinese Chop Suey", name_ar: "تشوب سوي صيني بالدجاج", price: 30 },
      { name_en: "Chicken Schezwan Noodles", name_ar: "نودلز شيتشوان بالدجاج", price: 30 },
      { name_en: "Mix Schezwan Noodles", name_ar: "نودلز شيتشوان المختلطة", price: 31 },
      { name_en: "Prawns Schezwan Noodles", name_ar: "نودلز شيتشوان بالجمبري", price: 31 },
      { name_en: "Egg Noodles", name_ar: "نودلز بالبيض", price: 25 },
      { name_en: "Egg Schezwan Noodles", name_ar: "نودلز شيتشوان بالبيض", price: 27 },
      { name_en: "Mix Non-Veg Noodles", name_ar: "نودلز غير نباتية مختلطة", price: 33 },
      { name_en: "Singapuri Non-Veg Noodles", name_ar: "نودلز غير نباتية في سنغافورة", price: 35 }
    ]
  },
   {
    category: "DESSERT حلوی",
    items: [
      { name_en: "Gulab Jamun", name_ar: "جولاب جامون", price: 3 },
      { name_en: "Malai Kulfi", name_ar: "ملائی کلفی", price: 9 },
      { name_en: "Fresh Fruit Salad", name_ar: "سلطة فواكه طازجة", price: 14 },
      { name_en: "Choice of Ice Cream", name_ar: "اختيار الآيس كريم", price: 12 },
      { name_en: "Gajar Ka Halwa", name_ar: "جاجر کا حلوة", price: 9 },
      { name_en: "Special Pudding", name_ar: "بودينج خاص", price: 12 },
      { name_en: "Anjeer Dry Fruit Sweet", name_ar: "أنجير فواكه جافة حلوة", price: 11 },
      { name_en: "Kaddu Ki Kheer", name_ar: "كدو كي خير", price: 10 },
      { name_en: "Kurbani Ka Meetha", name_ar: "قرباني کا میٹھا", price: 12 },
      { name_en: "Double Ka Meetha", name_ar: "ڈبل کا میٹھا", price: 11 }
    ]
  },
   {
    category: "BEVERAGES مشروبات",
    items: [
      { name_en: "Passion Fruit Mojito", name_ar: "موهيتو فاكهة العاطفة", price: 11 },
      { name_en: "Blueberry Mojito", name_ar: "موهيتو التوت الأزرق", price: 11 },
      { name_en: "Watermelon Mojito", name_ar: "موهيتو البطيخ", price: 11 },
      { name_en: "Strawberry Mojito", name_ar: "موهيتو الفراولة", price: 11 },
      { name_en: "Saudi Champagne", name_ar: "شامبانيا سعودية", price: 12 },
      { name_en: "Saudi Champagne Jar", name_ar: "برطمان شامبانيا سعودي", price: 27 },
      { name_en: "Lemon Mint Juice", name_ar: "عصير ليمون بالنعناع", price: 9 },
      { name_en: "Lemon Juice", name_ar: "عصير ليمون", price: 7 },
      { name_en: "Fresh Lime Soda", name_ar: "صودا ليمون طازجة", price: 8 },
      { name_en: "Orange Juice", name_ar: "عصير برتقال", price: 14 },
      { name_en: "Grape Juice", name_ar: "عصير عنب", price: 14 },
      { name_en: "Fruit Punch", name_ar: "بانش فواكه", price: 14 },
      { name_en: "Nutella Milk Shake", name_ar: "ميلك شيك نوتيلا", price: 15 },
      { name_en: "Oreo Milk Shake", name_ar: "ميلك شيك أوريو", price: 15 },
      { name_en: "Dry Fruit Milk Shake", name_ar: "ميلك شيك فواكه مجففة", price: 16 },
      { name_en: "Blueberry Milk Shake", name_ar: "ميلك شيك التوت الأزرق", price: 15 },
      { name_en: "Strawberry Milk Shake", name_ar: "ميلك شيك الفراولة", price: 15 },
      { name_en: "Avocado Milk Shake", name_ar: "ميلك شيك الأفوكادو", price: 16 },
      { name_en: "Mango Milk Shake", name_ar: "ميلك شيك المانجو", price: 15 },
      { name_en: "Buttermilk", name_ar: "لبن زبادي", price: 9 },
      { name_en: "Mango Lassi", name_ar: "لاسي المانجو", price: 14 },
      { name_en: "Sweet or Salted Lassi", name_ar: "لاسي حلو/مملح", price: 9 },
      { name_en: "Beer Non Alcoholic", name_ar: "بيرة خالية من الكحول", price: 9 }
    ]
  }
];
// Generate top navigation links
const navbar = document.getElementById("navbar");
menuData.forEach((cat, index) => {
  const link = document.createElement("a");
  link.href = `#cat-${index}`;
  link.textContent = cat.category;
  navbar.appendChild(link);
});

// Generate menu sections
const menuContainer = document.getElementById("menu-container");
menuData.forEach((cat, index) => {
  const section = document.createElement("div");
  section.className = "category";
  section.id = `cat-${index}`;

  const header = document.createElement("h2");
  header.textContent = cat.category;
  section.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "menu-grid";

  cat.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";

    // Placeholder image (replace in production)
    const img = document.createElement("img");
    const imgText = encodeURIComponent(item.name_en);
    img.src = `${imgText}.jpg`;
    img.alt = item.name_en;
    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "info";

    const title = document.createElement("h3");
    title.textContent = item.name_en;

    const arabic = document.createElement("p");
    arabic.textContent = item.name_ar;

    // **New: Add price**
    const price = document.createElement("p");
    price.className = "price"; // Add a class for styling
    price.textContent = item.price ? `Price: ${item.price} SAR` : "Price: Not Available";

    // Append elements
    info.appendChild(title);
    info.appendChild(arabic);
    info.appendChild(price); // **New line to add price**
    card.appendChild(info);

    grid.appendChild(card);
});

  section.appendChild(grid);
  menuContainer.appendChild(section);
});

function searchMenu() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item h3");

  let found = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      item.style.background = "yellow"; // Highlight the found item
      found = true;
      setTimeout(() => item.style.background = "", 2000); // Remove highlight
    }
  });

  if (!found) {
    alert("Item not found!");
  }
}

window.onscroll = function() {
  let button = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 300) { 
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSuggestions() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (query === "") {
    return;
  }

  const suggestions = [];
  menuData.forEach(category => {
    category.items.forEach(item => {
      if (item.name_en.toLowerCase().includes(query)) {
        suggestions.push(item.name_en);
      }
    });
  });

  if (suggestions.length === 0) {
    resultsContainer.innerHTML = "<div class='search-result-item'>No results found</div>";
  } else {
    suggestions.forEach(name => {
      const div = document.createElement("div");
      div.textContent = name;
      div.classList.add("search-result-item");
      div.onclick = () => {
        document.getElementById("search-bar").value = name;
        resultsContainer.innerHTML = "";
        scrollToItem(name);
      };
      resultsContainer.appendChild(div);
    });
  }
}

function scrollToItem(name) {
  const items = document.querySelectorAll(".menu-item h3");
  items.forEach(item => {
    if (item.textContent === name) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      item.style.background = "yellow";
      setTimeout(() => item.style.background = "", 2000);
    }
  });
}
