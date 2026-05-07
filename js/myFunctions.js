const mealsDatabase = [
    {
        id: "SF-001",
        code: "SF-001",
        title: "وجبة سمك بوري مشوي لشخصين",
        price: 110000,
        cuisine: "مصري",
        category: "مأكولات بحرية",
        ingredients: [
            "4 سمكات بوري أحمر، مغسول ومنظف",
            "بضعة أوراق من الأوريجانو الطازج، مقطعة",
            "1 ملعقة صغيرة من ملح الطعام",
            "1 ملعقة صغيرة من الفلفل الأسود المطحون"
        ],
        sauce: [
            "1 ملعقة كبيرة من زيت الزيتون",
            "3 فصوص ثوم مقشرة ومقطعة بشكل ناعم",
            "1 حبة فلفل أحمر طازج، منزوعة البذور ومقطعة إلى شرائح رفيعة",
            "6 حبات طماطم طريبة، مفرومة",
            "1/2 ليمونة معصورة",
            "ضمة صغيرة من البقدونس الطازج المفروم"
        ],
        image: "assets/meals/SF-001.jpg"
    },
    {
        id: "SF-002",
        code: "SF-002",
        title: "وجبة سمك فيلية بالليمون",
        price: 95000,
        cuisine: "لبناني",
        category: "مأكولات بحرية",
        ingredients: [
            "2 فيلية سمك فيشة طازج",
            "2 ملعقة كبيرة زبدة",
            "2 فص ثوم مفروم",
            "ملح وفلفل حسب الرغبة"
        ],
        sauce: [
            "عصير 2 ليمونة حامض",
            "2 ملعقة كبيرة زيت زيتون",
            "بقدونس مفروم للتزيين"
        ],
        image: "assets/meals/SF-002.jpg"
    },
    {
        id: "SF-003",
        code: "SF-003",
        title: "وجبة كباب حلب",
        price: 85000,
        cuisine: "حلبي",
        category: "لحوم مشوية",
        ingredients: [
            "500 غرام لحم خروف مفروم ناعم",
            "1 بصلة مبشورة",
            "بقدونس مفروم",
            "ملح وفلفل وبهارات"
        ],
        sauce: [
            "صلصة طحينية",
            "بقدونس وبصل مفروم للتقديم"
        ],
        image: "assets/meals/SF-003.jpg"
    },
    {
        id: "SF-004",
        code: "SF-004",
        title: "وجبة مشاوي مشكلة",
        price: 120000,
        cuisine: "شامي",
        category: "لحوم مشوية",
        ingredients: [
            "200 غرام شيش طاووق",
            "200 غرام كباب",
            "200 غرام لحم بعظم",
            "بصل وفلفل مشوي"
        ],
        sauce: [
            "صوص ثوم",
            "صوص بندورة مشوية"
        ],
        image: "assets/meals/SF-004.jpg"
    },
    {
        id: "SF-005",
        code: "SF-005",
        title: "وجبة منسف أردني",
        price: 150000,
        cuisine: "أردني",
        category: "أطباق رئيسية",
        ingredients: [
            "لحم خروف مع العظم",
            "أرز طويل الحبة",
            "لبن جميد",
            "لوز وسمسم للتزيين"
        ],
        sauce: [
            "مرق اللبن الساخن",
            "سمنة عربية"
        ],
        image: "assets/meals/SF-005.jpg"
    },
    {
        id: "SF-006",
        code: "SF-006",
        title: "بيتزا عائلية مشكلة",
        price: 75000,
        cuisine: "إيطالي",
        category: "بيتزا",
        ingredients: [
            "عجينة بيتزا طازجة",
            "صلصة بيتزا",
            "جبن موزاريلا",
            "سلامي إيطالي",
            "فطر طازج",
            "فلفل ألوان",
            "زيتون أسود"
        ],
        sauce: [
            "صوص ثوم",
            "صوص طماطم حار",
            "صوص الباربكيو"
        ],
        image: "assets/meals/SF-006.jpg"
    },
    {
        id: "SF-007",
        code: "SF-007",
        title: "بروستد دجاج (8 قطع)",
        price: 95000,
        cuisine: "أمريكي",
        category: "وجبات سريعة",
        ingredients: [
            "دجاج طازج",
            "دقيق مقرمش",
            "بقسماط حار",
            "توابل خاصة",
            "زيت للقلي"
        ],
        sauce: [
            "صوص ثوم",
            "صوص حار",
            "كاتشاب",
            "مايونيز"
        ],
        image: "assets/meals/SF-007.jpg"
    },
    {
        id: "SF-008",
        code: "SF-008",
        title: "همبرغر لحم صغير",
        price: 55000,
        cuisine: "أمريكي",
        category: "همبرغر",
        ingredients: [
            "لحم بقري طازج (200غم)",
            "خبز برجر طازج",
            "خس",
            "طماطم",
            "بصل مكرمل",
            "خيار مخلل",
            "جبن شيدر"
        ],
        sauce: [
            "صوص برجر خاص",
            "كاتشاب",
            "مايونيز",
            "خردل"
        ],
        image: "assets/meals/SF-008.jpg"
    },
    {
        id: "SF-009",
        code: "SF-009",
        title: "زينجر دجاج حار",
        price: 60000,
        cuisine: "أمريكي",
        category: "ساندويشات",
        ingredients: [
            "صدر دجاج مقرمش",
            "خبز زينجر",
            "خس",
            "طماطم كرزية",
            "جبنة",
            "فلفل حار"
        ],
        sauce: [
            "صوص زينجر حار",
            "صوص بيضاء",
            "صوص جبنة"
        ],
        image: "assets/meals/SF-009.jpg"
    },
    {
        id: "SF-010",
        code: "SF-010",
        title: "كريسبي دجاج (عادي)",
        price: 52000,
        cuisine: "أمريكي",
        category: "ساندويشات",
        ingredients: [
            "صدر دجاج مقرمش",
            "خبز طري",
            "خس",
            "بصل مفروم"
        ],
        sauce: [
            "صوص كريسبي",
            "كاتشاب",
            "مايونيز"
        ],
        image: "assets/meals/SF-010.jpg"
    },
    {
        id: "SF-011",
        code: "SF-011",
        title: "فاهيتا دجاج",
        price: 82000,
        cuisine: "مكسيكي",
        category: "فاهيتا",
        ingredients: [
            "شرائح دجاج",
            "فلفل ألوان مشوي",
            "بصل مشوي",
            "خبز تورتيلا (3 قطع)",
            "افوكادو",
            "جبنة موزاريلا"
        ],
        sauce: [
            "صوص فاهيتا",
            "صوص حار",
            "صوص كريمة",
            "غواكامولي"
        ],
        image: "assets/meals/SF-011.jpg"
    },
    {
        id: "SF-012",
        code: "SF-012",
        title: "معكرونة بشاميل بالدجاج",
        price: 68000,
        cuisine: "إيطالي",
        category: "معكرونة",
        ingredients: [
            "معكرونة بيني",
            "دجاج مسحب",
            "بشاميل",
            "جبن موزاريلا",
            "فطر",
            "بقدونس"
        ],
        sauce: [
            "صوص بشاميل",
            "صوص طماطم خفيف",
            "جبنة بارميزان"
        ],
        image: "assets/meals/SF-012.jpg"
    },
    {
        id: "SF-013",
        code: "SF-013",
        title: "كبة مشوية (10 حبات)",
        price: 45000,
        cuisine: "حلبي",
        category: "مقبلات",
        ingredients: [
            "برغل ناعم",
            "لحم خروف",
            "بصل",
            "صنوبر",
            "بهارات كبة",
            "نعنع يابس"
        ],
        sauce: [
            "صوص رمان",
            "لبن خاثر",
            "صوص طحينية"
        ],
        image: "assets/meals/SF-013.jpg"
    },
    {
        id: "SF-014",
        code: "SF-014",
        title: "كبة مقلية (10 حبات)",
        price: 40000,
        cuisine: "شامي",
        category: "مقبلات",
        ingredients: [
            "برغل ناعم",
            "لحم خروف",
            "جوز",
            "زبيب",
            "بهارات مشكلة"
        ],
        sauce: [
            "صوص رمان",
            "لبن"
        ],
        image: "assets/meals/SF-014.jpg"
    },
    {
        id: "SF-015",
        code: "SF-015",
        title: "كبة نية (مع كبة وخبز)",
        price: 65000,
        cuisine: "حلبي",
        category: "أطباق رئيسية",
        ingredients: [
            "لحم خروف",
            "برغل ناعم",
            "بصل حلب",
            "زيت زيتون",
            "نعنع وبقدونس"
        ],
        sauce: [
            "زيت زيتون",
            "صوص رمان",
            "ثوم مهروس",
            "فلفل حار"
        ],
        image: "assets/meals/SF-015.jpg"
    },
    {
        id: "SF-016",
        code: "SF-016",
        title: "بيتزا بيبروني",
        price: 68000,
        cuisine: "إيطالي",
        category: "بيتزا",
        ingredients: [
            "عجينة طازجة",
            "صلصة بيتزا",
            "جبن موزاريلا",
            "بيبروني إيطالي",
            "أوريغانو",
            "فلفل أسود"
        ],
        sauce: [
            "صوص ثوم",
            "صوص حار",
            "زيت زيتون"
        ],
        image: "assets/meals/SF-016.jpg"
    },
    {
        id: "SF-017",
        code: "SF-017",
        title: "معكرونة كاربونارا",
        price: 62000,
        cuisine: "إيطالي",
        category: "معكرونة",
        ingredients: [
            "معكرونة سباغيتي",
            "لحم مقدد",
            "بيض",
            "جبن بارميزان",
            "فلفل أسود",
            "بقدونس"
        ],
        sauce: [
            "صوص كاربونارا كريمية",
            "صوص جبنة",
            "زيت زيتون"
        ],
        image: "assets/meals/SF-017.jpg"
    }
];

// دالة للحصول على جميع الوجبات
function getAllMeals() {
    return mealsDatabase;
}

// دالة للحصول على وجبة حسب الرمز
function getMealById(mealId) {
    return mealsDatabase.find(meal => meal.code === mealId);
}
// عند تحميل الصفحة، تحميل الوجبات على الدوم
document.addEventListener('DOMContentLoaded', function() {
    buildMealsTable();
});

function buildMealsTable() {
    const tbody = document.getElementById('mealsTableBody');
    if (!tbody) {
        console.log("خطأ: لم أجد tbody");
        return;
    }
    else{
        tbody.addEventListener('change', function(e) {
        if (e.target.classList.contains('meal-checkbox')) {
            updateSelectedMeals();
        }
    });
    }
    
    const meals = getAllMeals();
    if (!meals || meals.length === 0) {
        console.log("خطأ: لا يوجد وجبات");
        return;
    }
    
    console.log("عدد الوجبات:", meals.length);
    
    let html = '';
    
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const priceFormatted = meal.price.toLocaleString() + ' ل.س';
        
        // بناء الصف الرئيسي
        html += `
            <tr id="row_main_${meal.code}">
                <td style="border: 1px solid #ddd; padding: 12px; text-align: center; vertical-align: middle;">
                    <strong>${meal.code}</strong>
                </td>
                <td style="border: 1px solid #ddd; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${meal.image}" class="meal-image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;" onerror="this.src='https://placehold.co/60x60?text=Food'">
                        <span style="font-size: 16px; font-weight: 500;">${meal.title}</span>
                    </div>
                 </td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: center; vertical-align: middle;">
                    ${priceFormatted}
                </td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: center; vertical-align: middle;">
                    <button onclick="toggleMealDetails('${meal.code}')" id="btn_${meal.code}" class="detail-btn">
                        📋 إظهار التفاصيل
                    </button>
                </td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: center; vertical-align: middle;">
                    <input type="checkbox" class="meal-checkbox" data-code="${meal.code}" data-price="${meal.price}" style="width: 20px; height: 20px; cursor: pointer;">
                </td>
            </tr>
        `;
        
        // بناء صف التفاصيل (مخفي في البداية)
        html += `
            <tr id="row_details_${meal.code}" style="display: none;">
                <td colspan="5" style="padding: 0;">
                    <div class="details-container" style="background: #f8f9fa; border-top: 2px solid #f39c12; border-bottom: 2px solid #f39c12; padding: 20px;">
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 100%;">
                            
                            <!-- العمود الأيمن -->
                            <div style="background: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <h4 style="color: #e74c3c; margin: 0 0 15px 0; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
                                    🍽️ المطبخ
                                </h4>
                                <p style="margin: 0; font-size: 16px;">${meal.cuisine}</p>
                                
                                <h4 style="color: #e74c3c; margin: 20px 0 15px 0; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
                                    🏷️ تصنيف الطعام
                                </h4>
                                <p style="margin: 0; font-size: 16px;">${meal.category}</p>
                            </div>
                            
                            <!-- العمود الأيسر -->
                            <div style="background: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <h4 style="color: #e74c3c; margin: 0 0 15px 0; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
                                    🥘 المكونات
                                </h4>
                                <ul style="margin: 0; padding-right: 20px;">
                                    ${meal.ingredients.map(ing => `<li style="margin: 8px 0;">${ing}</li>`).join('')}
                                </ul>
                            </div>
                            
                        </div>
                        
                        <!-- صف ثاني للصلصة -->
                        <div style="background: white; border-radius: 12px; padding: 15px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <h4 style="color: #e74c3c; margin: 0 0 15px 0; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
                                🍯 الصلصة
                            </h4>
                            <ul style="margin: 0; padding-right: 20px;">
                                ${meal.sauce.map(s => `<li style="margin: 8px 0;">${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    }
    
    tbody.innerHTML = html;
    console.log("تم بناء الجدول بنجاح!");
}

// دالة تبديل التفاصيل
// function toggleMealDetails(mealCode) {
//     const detailsRow = document.getElementById(`row_details_${mealCode}`);
//     const btn = document.getElementById(`btn_${mealCode}`);
    
//     if (!detailsRow || !btn) {
//         console.log("خطأ: لم أجد العناصر", mealCode);
//         return;
//     }
    
//     if (detailsRow.style.display === 'none' || detailsRow.style.display === '') {
//         // إظهار التفاصيل
//         detailsRow.style.display = 'table-row';
//         btn.innerHTML = '✖ إخفاء التفاصيل';
//         btn.style.background = '#2c3e50';
//         btn.style.color = 'white';
//     } else {
//         // إخفاء التفاصيل
//         detailsRow.style.display = 'none';
//         btn.innerHTML = '📋 إظهار التفاصيل';
//         btn.style.background = '#3498db';
//         btn.style.color = 'white';
//     }
// }

// jQuery version لدالة تبديل التفاصيل
function toggleMealDetails(mealCode) {
    const $detailsRow = $(`#row_details_${mealCode}`);
    const $btn = $(`#btn_${mealCode}`);
    
    if ($detailsRow.is(':visible')) {
        $detailsRow.hide();
        $btn.html('📋 إظهار التفاصيل');
        $btn.css('background', '#3498db');
    } else {
        $detailsRow.show();
        $btn.html('✖ إخفاء التفاصيل');
        $btn.css('background', '#2c3e50');
    }
}

// عرض المودال عند الضغط على متابعة
function showOrderForm() {
    const checkboxes = document.querySelectorAll('.meal-checkbox:checked');
    
    if (checkboxes.length === 0) {
        alert('الرجاء اختيار وجبة واحدة على الأقل');
        return;
    }
    
    // حفظ الوجبات المختارة
    selectedMeals = [];
    checkboxes.forEach(cb => {
        const code = cb.getAttribute('data-code');
        const price = parseInt(cb.getAttribute('data-price'));
        const meal = getMealById(code);
        if (meal) {
            selectedMeals.push({
                code: meal.code,
                title: meal.title,
                price: price
            });
        }
    });
    
    // تنظيف الحقول السابقة
    clearFormFields();
    
    // إظهار المودال
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// إغلاق المودال
function closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.style.display = 'none';
    }
    clearFormErrors();
}

// تنظيف حقول الفورم
function clearFormFields() {
    const fields = ['fullName', 'nationalId', 'birthDate', 'mobile', 'email'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input) input.value = '';
    });
    clearFormErrors();
}

// تنظيف رسائل الخطأ
function clearFormErrors() {
    const errors = ['nameError', 'nationalIdError', 'birthDateError', 'mobileError', 'emailError'];
    errors.forEach(error => {
        clearError(error);
    });
}

// عرض رسالة خطأ
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// إخفاء رسالة خطأ
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// التحقق من صحة المدخلات وإرسال الطلب
function validateAndSubmit() {
    let isValid = true;
    
    // 1. التحقق من الاسم الكامل (أحرف هجائية عربية فقط)
    const fullName = document.getElementById('fullName');
    const nameRegex = /^[\u0600-\u06FF\s]+$/;
    if (!fullName.value.trim()) {
        showError('nameError', 'الاسم الكامل مطلوب');
        isValid = false;
    } else if (!nameRegex.test(fullName.value.trim())) {
        showError('nameError', 'الاسم يجب أن يحتوي على أحرف هجائية عربية فقط');
        isValid = false;
    } else {
        clearError('nameError');
    }
    
    // التحقق من الرقم الوطني (11 خانة، أول خانتين 01-14)
    const nationalId = document.getElementById('nationalId');
    const nationalIdRegex = /^(0[1-9]|1[0-4])\d{9}$/;
    if (!nationalId.value.trim()) {
        showError('nationalIdError', 'الرقم الوطني مطلوب');
        isValid = false;
    } else if (!nationalIdRegex.test(nationalId.value.trim())) {
        showError('nationalIdError', 'الرقم الوطني يجب أن يكون 11 خانة ويبدأ بـ 01-14 (دمشق=01, حلب=02, ...)');
        isValid = false;
    } else {
        clearError('nationalIdError');
    }
    
    // 3. التحقق من تاريخ الولادة (اختياري)
    const birthDate = document.getElementById('birthDate');
    if (birthDate.value.trim()) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;
        if (!dateRegex.test(birthDate.value.trim())) {
            showError('birthDateError', 'التاريخ يجب أن يكون بصيغة dd-mm-yyyy');
            isValid = false;
        } else {
            clearError('birthDateError');
        }
    } else {
        clearError('birthDateError');
    }
    
    // 4. التحقق من رقم الموبايل (اختياري - Syriatel أو MTN)
    const mobile = document.getElementById('mobile');
    if (mobile.value.trim()) {
        const mobileRegex = /^(091|092|093|094|095|096|097|098|099)\d{7}$/;
        if (!mobileRegex.test(mobile.value.trim())) {
            showError('mobileError', 'رقم الموبايل يجب أن يتكون من 10 أرقام ويبدأ بـ 091-099');
            isValid = false;
        } else {
            clearError('mobileError');
        }
    } else {
        clearError('mobileError');
    }
    
    // 5. التحقق من البريد الإلكتروني (اختياري)
    const email = document.getElementById('email');
    if (email.value.trim()) {
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError('emailError', 'البريد الإلكتروني غير صالح');
            isValid = false;
        } else {
            clearError('emailError');
        }
    } else {
        clearError('emailError');
    }
    
    if (isValid) {
        showOrderSummary();
        closeModal();
    }
}

// عرض نافذة ملخص الطلب
function showOrderSummary() {
    // حساب المبلغ الإجمالي
    let total = 0;
    selectedMeals.forEach(meal => {
        total += meal.price;
    });
    
    //  5% زيادة ضريبة 
    const tax = total * 0.05;
    const finalTotal = total + tax;
    
    // بناء قائمة الوجبات المختارة
    let mealsList = '';
    selectedMeals.forEach(meal => {
        mealsList += `<li>${meal.code} - ${meal.title} : ${meal.price.toLocaleString()} ل.س</li>`;
    });
    
    // عرض نافذة جديدة
    const summaryWindow = window.open('', '_blank', 'width=550,height=550,scrollbars=yes,resizable=yes');
    summaryWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>ملخص الطلب</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; margin: 0; }
                h2 { color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 10px; }
                .summary-box { background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0; }
                .total { font-size: 1.2em; font-weight: bold; color: #27ae60; margin-top: 15px; padding-top: 10px; border-top: 2px solid #ddd; }
                .tax { color: #e67e22; }
                button { background: #e74c3c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 20px; }
                button:hover { background: #c0392b; }
                ul { list-style: none; padding: 0; }
                li { padding: 8px; border-bottom: 1px solid #eee; }
            </style>
        </head>
        <body>
            <h2>📋 ملخص الطلب</h2>
            <div class="summary-box">
                <h3>الوجبات المختارة:</h3>
                <ul>${mealsList}</ul>
                <div class="total">
                    <div>المجموع الفرعي: ${total.toLocaleString()} ل.س</div>
                    <div class="tax">ضريبة 5%: ${tax.toLocaleString()} ل.س</div>
                    <div style="font-size: 1.3em; margin-top: 10px;">✅ الإجمالي النهائي: ${finalTotal.toLocaleString()} ل.س</div>
                </div>
            </div>
            <button onclick="window.close()">إغلاق</button>
        </body>
        </html>
    `);
    summaryWindow.document.close();
}

function updateSelectedMeals() {
    const checkboxes = document.querySelectorAll('.meal-checkbox:checked');
    const continueBtn = document.getElementById('continueBtn');
    
    if (checkboxes.length > 0) {
        continueBtn.style.display = 'inline-block';
    } else {
        continueBtn.style.display = 'none';
        closeModal();
    }
}