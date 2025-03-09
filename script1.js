// The full menu data (all 350+ items from the Palm Tree Menu Book)
const menuData = [
  {
    category: "APPETIZERS مقبلات",
    items: [
      { name_en: "French Fries", name_ar: "بطاطس مقلية", price: 10 },
      { name_en: "Aloo Chop", name_ar: "ألو تشوب", price: 15 },
      { name_en: "Vegetable Chop", name_ar: "قطع الخضار", price: 16 },
      { name_en: "Paneer Pakoda", name_ar: "جبن باكودا", price: 24 },
      { name_en: "Onion Bhajia", name_ar: "بصل بهاجيا", price: 16 },
      { name_en: "Vegetable Pakoda", name_ar: "باكودا الخضار", price: 16 },
      { name_en: "Vegetable Cutlets", name_ar: "شرحات الخضار", price: 14 },
      { name_en: "Hara bhara Kabab", name_ar: "هارا بهارا كباب", price: 14 },
      { name_en: "Baby Corn Chilli", name_ar: "بيبي كورن تشيلي", price: 26 },
      { name_en: "Paneer Manchurian", name_ar: "جبن منشوريا", price: 26 },
      { name_en: "Vegetable Samosa", name_ar: "سمبوسة الخضار", price: 11 },
      { name_en: "Vegetable Spring Roll", name_ar: "سبرينج رول خضار", price: 17 },
      { name_en: "Dragon Paneer", name_ar: "التنين بانير", price: 27 },
      { name_en: "Veg Honkong", name_ar: "الخضار هونج كونج", price: 24 },
      { name_en: "Chilli Mushroom", name_ar: "فطر الفلفل الحار", price: 25 },
      { name_en: "Gobi Chilli", name_ar: "جوبي تشيلي", price: 22 },
      { name_en: "Paneer Schezwan", name_ar: "بانير شيزوان", price: 28 },
      { name_en: "Paneer Samosa", name_ar: "سمبوسة بانير", price: 17 },
      { name_en: "Chilli Potato", name_ar: "بطاطا بالفلفل الحار", price: 24 },
      { name_en: "Mix Samosa", name_ar: "مزيج السمبوسة", price: 19 },
      { name_en: "Chicken Samosa", name_ar: "سمبوسة الدجاج", price: 16 },
      { name_en: "Chicken Pakoda", name_ar: "باكودا الدجاج", price: 24 },
      { name_en: "Chicken Lollipop", name_ar: "لولي بوب الدجاج", price: 20 },
      { name_en: "Chicken Majestic", name_ar: "دجاج ماجيستيك", price: 26 },
      { name_en: "Chicken Cutlet", name_ar: "كفتة الدجاج", price: 22 },
      { name_en: "Chicken Spring Roll", name_ar: "لفائف الدجاج الربيعية", price: 19 },
      { name_en: "Garlic Chicken", name_ar: "دجاج بالثوم", price: 27 },
      { name_en: "Shazmi Chicken", name_ar: "دجاج شازمي", price: 30 },
      { name_en: "Mutton Mince Samosa", name_ar: "سمبوسة لحم الغنم المفروم", price: 18 },
      { name_en: "Mutton Spring Roll", name_ar: "لفائف لحم الغنم الربيعية", price: 21 },
      { name_en: "Golden Chicken", name_ar: "دجاج ذهبي", price: 27 },
      { name_en: "Black Pepper Chicken", name_ar: "دجاج بالفلفل الأسود", price: 27 },
      { name_en: "Chicken 555", name_ar: "دجاج 555", price: 28 },
      { name_en: "Apollo Chicken", name_ar: "دجاج أبولو", price: 28 },
      { name_en: "Dragon Chicken", name_ar: "دجاج التنين", price: 28 },
      { name_en: "BBQ Chicken Wings", name_ar: "أجنحة دجاج باربيكيو", price: 26 },
      { name_en: "Lemon Chicken", name_ar: "دجاج بالليمون", price: 28 },
      { name_en: "Dynamite Chicken", name_ar: "دجاج دايناميت", price: 32 },
      { name_en: "Mutton Chilli", name_ar: "لحم الغنم الحار", price: 28 },
      { name_en: "Mutton Ghee Roast", name_ar: "لحم الغنم المشوي بالسمن", price: 29 },
      { name_en: "Shrimps Bombay Bite", name_ar: "روبيان وجبة بومباي", price: 29 },
      { name_en: "Fried Prawns Tempura", name_ar: "روبيان مقلي تمبورا", price: 28 },
      { name_en: "Chilli Fish", name_ar: "سمك حار", price: 32 },
      { name_en: "Fish Manchurian", name_ar: "سمك منشوريان", price: 33 },
      { name_en: "Fish 65", name_ar: "سمك 65", price: 32 },
      { name_en: "Loose Prawns", name_ar: "روبيان سائب", price: 31 },
      { name_en: "Prawns Manchurian", name_ar: "روبيان منشوريان", price: 30 },
      { name_en: "Chilli Garlic Prawns", name_ar: "روبيان بالثوم الحار", price: 33 },
      { name_en: "Prawns Amareswari", name_ar: "روبيان أماريسواري", price: 30 },
      { name_en: "Dynamite Prawns", name_ar: "روبيان دايناميت", price: 37 },
      { name_en: "Fish Pepper Fry", name_ar: "سمك مقلي بالفلفل", price: 37 },
      { name_en: "Prawns 65", name_ar: "روبيان 65", price: 30 },
      { name_en: "Prawns Chilli", name_ar: "روبيان حار", price: 30 }
    ]
  },
  {
    category: "SOUPS الشوربة",
    items: [
      { name_en: "Tomato Soup", name_ar: "شوربة الطماطم", price: 13 },
      { name_en: "Vegetable Hot 'N' Sour", name_ar: "خضار حارة وحامضة", price: 13 },
      { name_en: "Chicken Hot 'N' Sour", name_ar: "دجاج حار وحامض", price: 15 },
      { name_en: "Sweet Corn Vegetable", name_ar: "خضروات الذرة الحلوة", price: 13 },
      { name_en: "Lentil Soup", name_ar: "شوربة العدس", price: 15 },
      { name_en: "Sweet Corn Chicken", name_ar: "دجاج الذرة الحلوة", price: 15 },
      { name_en: "Vegetable Manchow", name_ar: "مانشو الخضار", price: 13 },
      { name_en: "Mushroom Soup", name_ar: "شوربة الفطر", price: 13 },
      { name_en: "Chicken Soup", name_ar: "شوربة الدجاج", price: 15 },
      { name_en: "Chicken Manchow Soup", name_ar: "شوربة دجاج مانشو", price: 15 },
      { name_en: "Sea Food Soup", name_ar: "شوربة المأكولات البحرية", price: 17 },
      { name_en: "Cream of Mushroom", name_ar: "شوربة كريمة الفطر", price: 14 },
      { name_en: "Cream Of Chicken", name_ar: "شوربة كريمة الدجاج", price: 17 },
      { name_en: "Lemon Coriander Chicken", name_ar: "شوربة دجاج بالكزبرة والليمون", price: 16 },
      { name_en: "Chicken Clear Soup", name_ar: "شوربة دجاج صافية", price: 15 },
      { name_en: "Veg Clear Soup", name_ar: "شوربة خضار صافية", price: 13 },
      { name_en: "Tom Yum Soup", name_ar: "شوربة توم يام", price: 18 },
      { name_en: "Spinach Soup", name_ar: "شوربة سبانخ", price: 14 }
    ]
  },
  {
    category: "SALAD سلطة",
    items: [
      { name_en: "Arabic Salad", name_ar: "سلطة عربية", price: 14 },
      { name_en: "Heaven Salad", name_ar: "سلطة الجنة", price: 15 },
      { name_en: "Russian Salad", name_ar: "سلطة روسية", price: 16 },
      { name_en: "Chicken Salad", name_ar: "سلطة دجاج", price: 16 },
      { name_en: "Hummus Salad", name_ar: "سلطة حمص", price: 16 },
      { name_en: "Fattoush Salad", name_ar: "سلطة فتوش", price: 14 },
      { name_en: "Tabbouleh Salad", name_ar: "سلطة تبولة", price: 14 },
      { name_en: "Green Salad", name_ar: "سلطة خضراء", price: 9 },
      { name_en: "Kachumber Salad", name_ar: "سلطة الكاشومبر", price: 10 },
      { name_en: "Raita", name_ar: "ريتا", price: 7 }
    ]
  },
   {
    category: "GRILLADES مشويات",
    items: [
      { name_en: "Kabab-E- Hazarvi", name_ar: "كباب الهزاري", price: 28 },
      { name_en: "Reshmi Kabab", name_ar: "ريشمي كباب", price: 28 },
      { name_en: "Chicken Tikka", name_ar: "دجاج تكا", price: 28 },
      { name_en: "Seekh Kabab", name_ar: "سيخ كباب", price: 28 },
      { name_en: "Tandoori Chicken Full", name_ar: "دجاج تندوري كامل", price: 35 },
      { name_en: "Tandoori Chicken Half", name_ar: "نصف دجاج تندوري", price: 22 },
      { name_en: "Fish Tikka", name_ar: "سمك تكا", price: 35 },
      { name_en: "Mix Grill Platter", name_ar: "طبق مشويات مشكلة", price: 59 },
      { name_en: "Fish Tandoori", name_ar: "تندوري السمك", price: "Seasonal Rates" },
      { name_en: "Malai Tikka", name_ar: "مالاي تكا", price: 30 },
      { name_en: "Tangdi Kabab", name_ar: "تانجدي كباب", price: 28 },
      { name_en: "Sultani Kebab", name_ar: "كباب سلطاني", price: 32 },
      { name_en: "Gilafi Seekh Kebab", name_ar: "جيلافي سيخ كباب", price: 29 },
      { name_en: "Lazeez Chicken Kebab", name_ar: "عزيز كباب دجاج", price: 30 },
      { name_en: "Noorani Seekh Kebab", name_ar: "نوراني سيخ كباب", price: 29 },
      { name_en: "Lemon Tikka", name_ar: "ليمون تكا", price: 29 },
      { name_en: "Lasooni Kebab", name_ar: "لسوني كباب", price: 29 },
      { name_en: "Zafrani Kebab", name_ar: "كباب زعفراني", price: 30 },
      { name_en: "Hariyali Kabab", name_ar: "هارييالي كباب", price: 28 },
      { name_en: "Chapli Kebab", name_ar: "تشابلي كباب", price: 26 }
    ]
  },
   {
    category: "VEGETABLES خضروات",
    items: [
      { name_en: "Stuffed Capsicum Tomato", name_ar: "المطعم المحشو بالفلفل", price: 24 },
      { name_en: "Dum Aloo Kashmiri", name_ar: "دم ألو كشميري", price: 26 },
      { name_en: "Navratan Korma", name_ar: "نافرتان كورما", price: 24 },
      { name_en: "Malai Kofta", name_ar: "مالاي كفتة", price: 26 },
      { name_en: "Aloo Mumtaz", name_ar: "ألو ممتاز", price: 22 },
      { name_en: "Aloo Gobi Banarasi", name_ar: "ألو جوبى بانارسي", price: 22 },
      { name_en: "Bhindi Masala", name_ar: "بهيندي ماسالا", price: 22 },
      { name_en: "Baingan Bhartha", name_ar: "باينجان بهاراتا", price: 18 },
      { name_en: "Chana Masala", name_ar: "تشان ماسالا", price: 18 },
      { name_en: "Mushroom & Peas Masala", name_ar: "المشروم والبازلاء ماسالا", price: 24 },
      { name_en: "Baingan Bhindi", name_ar: "باينجان بهيندي", price: 22 },
      { name_en: "Aloo Bhindi Fry", name_ar: "ألو بهيندي فراي", price: 22 },
      { name_en: "Dum Aloo", name_ar: "دم ألو", price: 18 },
      { name_en: "Aloo Gobi Masala", name_ar: "ألو جوبى ماسالا", price: 22 },
      { name_en: "Gobi 65", name_ar: "جوبى 65", price: 22 },
      { name_en: "Gobi Manchurian", name_ar: "جوبى منشوريان", price: 22 },
      { name_en: "Navratan Curry", name_ar: "نافرتان كاري", price: 26 },
      { name_en: "Baby Corn Jalfrezi", name_ar: "بيبي كورن جالفريزي", price: 26 },
      { name_en: "Baby Corn Mushroom", name_ar: "بيبي كورن مشروم", price: 26 },
      { name_en: "Veg. Jaipuri", name_ar: "خضار جايبوري", price: 22 },
      { name_en: "Veg. Jalfrezi", name_ar: "خضار جالفريزي", price: 22 },
      { name_en: "Veg. Kolhapuri", name_ar: "خضار كولهابوري", price: 24 },
      { name_en: "Veg. Kofta Curry", name_ar: "خضار كفتة كاري", price: 23 },
      { name_en: "Veg. Kadai", name_ar: "خضار كداي", price: 22 },
      { name_en: "Veg. 65", name_ar: "خضار 65", price: 22 },
      { name_en: "Veg. Tawa Curry", name_ar: "خضار توا كاري", price: 26 },
      { name_en: "Veg Hyderbadi", name_ar: "الخضر حيدرابادي", price: 25 },
      { name_en: "Paneer Korma", name_ar: "جبن كورما", price: 25 },
      { name_en: "Paneer Butter Masala", name_ar: "جبن زبدة ماسالا", price: 24 },
      { name_en: "Paneer Kadai", name_ar: "جبن كداي", price: 26 },
      { name_en: "Paneer Chilli", name_ar: "جبن تشيلي", price: 26 },
      { name_en: "Paneer Tikka Masala", name_ar: "جبن تكا ماسالا", price: 26 },
      { name_en: "Paneer Kolhapouri", name_ar: "جبن كولهابوري", price: 25 },
      { name_en: "Paneer Jalfrezi", name_ar: "جبن جالفريزي", price: 24 },
      { name_en: "Paneer Kofta Curry", name_ar: "جبن كفتة بالكاري", price: 26 },
      { name_en: "Paneer Palak", name_ar: "جبن بالاك", price: 22 },
      { name_en: "Paneer 65", name_ar: "جبن 65", price: 28 },
      { name_en: "Paneer Lababdar", name_ar: "جبن لابابدار", price: 27 },
      { name_en: "Paneer Chatpat", name_ar: "جبن شاتبات", price: 25 },
      { name_en: "Paneer Lajawab", name_ar: "جبن لوجواب", price: 26 },
      { name_en: "Paneer Rogan Josh", name_ar: "جبن روغن جوش", price: 26 },
      { name_en: "Dal Makhani", name_ar: "دال مخلني", price: 16 },
      { name_en: "Dal Ganga Jamuna", name_ar: "دال جانجا جامونا", price: 17 },
      { name_en: "Dal Thadka", name_ar: "دال تادكا", price: 17 },
      { name_en: "Mix Veg Curry", name_ar: "مزيج الخضر بالكاري", price: 23 },
      { name_en: "Veg Kundhan Kassa", name_ar: "الخضر كوندهان كاسا", price: 24 },
      { name_en: "Aloo Bhindi Masala", name_ar: "ألو بهيندي ماسالا", price: 24 },
      { name_en: "Bhindi Fry", name_ar: "بهيندي فراي", price: 22 },
      { name_en: "Tawa Paneer", name_ar: "توا بانير", price: 25 },
      { name_en: "Malai Paneer", name_ar: "مالاي بانير", price: 27 },
      { name_en: "Shahi Paneer", name_ar: "شاهي بانير", price: 26 },
      { name_en: "Tawa Veg", name_ar: "توا الخضر", price: 25 }
    ]
  },
   {
    category: "CHICKEN دجاج",
    items: [
      { name_en: "Butter Chicken Masala", name_ar: "دجاج بالزبدة ماسالا", price: 28 },
      { name_en: "Chicken Tikka Masala", name_ar: "دجاج تكا ماسالا", price: 29 },
      { name_en: "Chicken Shajahani", name_ar: "دجاج شاجهاني", price: 28 },
      { name_en: "Chicken Kolhapuri", name_ar: "دجاج كولهابوري", price: 28 },
      { name_en: "Chicken Kundan Curry", name_ar: "دجاج كوندان بالكاري", price: 27 },
      { name_en: "Chicken Masala", name_ar: "دجاج ماسالا", price: 26 },
      { name_en: "Chicken Korma", name_ar: "دجاج كورما", price: 28 },
      { name_en: "Chicken 65", name_ar: "دجاج 65", price: 28 },
      { name_en: "Chicken Jalfrezi", name_ar: "دجاج جالفريزي", price: 28 },
      { name_en: "Chicken Kadai", name_ar: "دجاج كداي", price: 28 },
      { name_en: "Chicken Handi", name_ar: "هندي دجاج", price: 39 },
      { name_en: "Chicken Mughlai", name_ar: "دجاج مغولي", price: 28 },
      { name_en: "Chicken Curry", name_ar: "كاري الدجاج", price: 27 },
      { name_en: "Chicken Jaipuri", name_ar: "دجاج جايبوري", price: 28 },
      { name_en: "Chicken Sukka", name_ar: "سوكها دجاج", price: 29 },
      { name_en: "Chicken Saagwala", name_ar: "دجاج ساجوالا", price: 28 },
      { name_en: "Chicken Achari", name_ar: "دجاج أشاري", price: 27 },
      { name_en: "Chicken Punjabi", name_ar: "دجاج بنجابي", price: 28 },
      { name_en: "Chicken Hyderbadi", name_ar: "دجاج حيدرابادي", price: 27 },
      { name_en: "Reshmi Chicken Masala", name_ar: "ريشمي دجاج ماسالا", price: 29 },
      { name_en: "Chicken Afghani", name_ar: "دجاج أفغاني", price: 29 },
      { name_en: "Chicken Do Pyaza", name_ar: "دجاج دو بيازا", price: 28 },
      { name_en: "Chicken Lababdar", name_ar: "لابابدار دجاج", price: 29 },
      { name_en: "Tandoori Chicken Masala", name_ar: "تندوري دجاج ماسالا", price: 30 },
      { name_en: "Dum Ka Chicken", name_ar: "دم كا دجاج", price: 30 },
      { name_en: "Chicken Hara Masala", name_ar: "دجاج هارا ماسالا", price: 28 }
    ]
  },
   {
    category: "BEEF لحم بقر",
    items: [
      { name_en: "Beef Vindaloo", name_ar: "لحم بقر فيندالو", price: 27 },
      { name_en: "Beef Fry", name_ar: "لحم بقر مقلي", price: 28 },
      { name_en: "Beef Pepper Fry", name_ar: "لحم بقر مقلي بالفلفل", price: 28 },
      { name_en: "Beef Jalfrezi", name_ar: "لحم بقر جالفريزي", price: 28 },
      { name_en: "Beef Chilli Fry", name_ar: "لحم بقر مقلي بالفلفل الحار", price: 28 },
      { name_en: "Beef Coconut Fry", name_ar: "لحم بقر بجوز الهند مقلي", price: 29 },
      { name_en: "Beef Talawa", name_ar: "تلاوة لحم", price: 28 },
      { name_en: "Beef Bhuna", name_ar: "لحم بقر بهونا", price: 29 },
      { name_en: "Beef Kassa", name_ar: "لحم بقر كاسا", price: 28 }
    ]
  },
   {
    category: "MUTTON لحم الضأن",
    items: [
      { name_en: "Mutton Korma", name_ar: "لحم الضأن كورما", price: 28 },
      { name_en: "Keema Mutton", name_ar: "كيما لحم الضأن", price: 27 },
      { name_en: "Mutton Do Pyaza", name_ar: "لحم الضأن دو بياز", price: 28 },
      { name_en: "Mutton Rogan Josh", name_ar: "لحم الضأن روجان جوش", price: 28 },
      { name_en: "Mutton Handi", name_ar: "لحم الضأن هاندي", price: 39 },
      { name_en: "Aloo Gosht", name_ar: "ألو جوشت", price: 28 },
      { name_en: "Mutton Afghani", name_ar: "لحم الضأن أفغاني", price: 28 },
      { name_en: "Mutton Saagwala", name_ar: "لحم الضأن ساجوالا", price: 27 },
      { name_en: "Mutton Masala", name_ar: "لحم الضأن ماسالا", price: 28 },
      { name_en: "Mutton Kadai", name_ar: "لحم الضأن كادي", price: 29 },
      { name_en: "Mutton Chilli", name_ar: "لحم الضأن بارد", price: 29 },
      { name_en: "Mutton Fry", name_ar: "لحم الضأن مقلي", price: 29 },
      { name_en: "Mutton Pepper", name_ar: "فلفل لحم الضأن", price: 29 },
      { name_en: "Mutton Roast", name_ar: "لحم الضأن مشوي", price: 29 },
      { name_en: "Mutton Coconut Fry", name_ar: "لحم الضأن بجوز الهند مقلي", price: 29 },
      { name_en: "Daal Gosht", name_ar: "دال جوشت", price: 28 },
      { name_en: "Bhindi Gosht", name_ar: "بهيندي جوشت", price: 28 },
      { name_en: "Mutton Mughlai", name_ar: "لحم الضأن مغولي", price: 29 },
      { name_en: "Mutton Hyderabadi", name_ar: "لحم الضأن حيدربادي", price: 28 },
      { name_en: "Mutton Kolhapuri", name_ar: "لحم الضأن كولهابوري", price: 29 },
      { name_en: "Mutton Bhuna Dry", name_ar: "لحم الضأن بهونا جاف", price: 30 },
      { name_en: "Dum Ka Mutton", name_ar: "دوم كا لحم الضأن", price: 32 }
    ]
  },
  {
    category: "SIZZLER & PASTA سيزلر و باستا",
    items: [
      { name_en: "Chicken BBQ Sizzler", name_ar: "دجاج مشوي على الفحم", price: 39 },
      { name_en: "Chicken Sizzler", name_ar: "دجاج مشوي على الفحم", price: 37 },
      { name_en: "Mix Sizzler", name_ar: "مزيج من المقبلات", price: 40 },
      { name_en: "Seafood Mix Sizzler", name_ar: "مزيج المأكولات البحرية", price: 42 },
      { name_en: "Chicken Pesto Pasta", name_ar: "باستا الدجاج والبيستو", price: 28 },
      { name_en: "Chicken Alfredo Pasta", name_ar: "باستا الدجاج والفريدو", price: 28 },
      { name_en: "Red Sauce Chicken Pasta", name_ar: "باستا الدجاج بالصلصة الحمراء", price: 27 },
      { name_en: "Red Sauce Veg Pasta", name_ar: "باستا الخضار بالصلصة الحمراء", price: 26 }
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
