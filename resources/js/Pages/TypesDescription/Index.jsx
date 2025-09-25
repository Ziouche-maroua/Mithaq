import { Shield, BookOpen, Users, CheckCircle, Star, ArrowRight, Info, Scale, Heart, AlertCircle, Target, TrendingUp, Wrench } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';    


function InformationPage() {
  const [selectedBuyou, setSelectedBuyou] = useState('murabaha');

  const BuyouCard = ({ id, title, icon, color, isSelected, onClick }) => {
    const getColorClasses = (color) => {
      const colors = {
        emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', gradient: 'from-emerald-500 to-emerald-600', border: 'border-emerald-200' },
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600', border: 'border-blue-200' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', border: 'border-purple-200' },
        orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600', border: 'border-orange-200' },
        teal: { bg: 'bg-teal-100', text: 'text-teal-600', gradient: 'from-teal-500 to-teal-600', border: 'border-teal-200' },
        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600', border: 'border-indigo-200' }
      };
      return colors[color] || colors.emerald;
    };

    const colors = getColorClasses(color);

    return (
      <button
        onClick={onClick}
        className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
          isSelected 
            ? `${colors.border} bg-gradient-to-br ${colors.gradient} text-white shadow-lg` 
            : `border-gray-200 bg-white hover:${colors.border} hover:${colors.bg}`
        }`}
      >
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
          isSelected ? 'bg-white/20' : colors.bg
        }`}>
          <div className={isSelected ? 'text-white' : colors.text}>
            {icon}
          </div>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${
          isSelected ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
      </button>
    );
  };

  const MurabahaContent = () => (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-12">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
          <Scale className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">المرابحة</h2>
      </div>

      {/* التعريف */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="w-6 h-6 ml-3 text-emerald-600" />
          التعريف
        </h3>
        <div className="bg-emerald-50 p-6 rounded-xl">
          <p className="text-gray-700 leading-relaxed text-lg">
            يقصد بها أن يبيع التاجر السلعة للمشتري بالثمن الذي اشتراها به وبزيادة عليه وهذه الزيادة هي الربح
          </p>
        </div>
      </div>

      {/* الشروط */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 ml-3 text-emerald-600" />
          الشروط الشرعية
        </h3>
        <p className="text-gray-700 mb-4">يشترط فيه ما يشترط في كل البيوع مع إضافة شروط أخرى وهي:</p>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
            <p className="text-gray-700">أن يكون العقد الأول صحيحا فإن كان فاسدا لم يجز البيع بالمرابحة لأنه بيع بالثمن الأول مع زيادة ربح</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
            <p className="text-gray-700">أن يكون الثمن الأول معلوما للمشتري الثاني</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
            <p className="text-gray-700">أن يكون رأس المال من ذوات الأمثال أي التي لها مثيل في السوق</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">4</div>
            <p className="text-gray-700">أن يكون الربح معلوما</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">5</div>
            <p className="text-gray-700">أن لا يكون الثمن في العقد الأول مقابلا بجنسه من أموال الربا</p>
          </div>
        </div>
      </div>

      {/* بيع المرابحة للآمر بالشراء */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="w-6 h-6 ml-3 text-teal-600" />
          بيع المرابحة للآمر بالشراء
        </h3>
        <div className="bg-teal-50 p-6 rounded-xl mb-6">
          <h4 className="font-bold text-gray-900 mb-3">التعريف:</h4>
          <p className="text-gray-700 leading-relaxed">
            اتفاق بين طرفين أحدهما يُسمى آمرا ، والآخر مأمورا ، يطلب الآمر من المأمور أن يشتري له سلعة على أن يشتريها منه بثمن مؤجل ويربحه فيها مبلغا محددا، ويوقعان على التزام كل منهما بالوفاء بما اتفقا عليه.
          </p>
        </div>
        
        <h4 className="font-bold text-gray-900 mb-4">الشروط الأساسية الزائدة عن البيع بالمرابحة:</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-gray-700">يجب أن يكون هناك وعد ملزم لكن مجرد وعد، وليس عقد بيع</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-gray-700">يجب على المأمور أن يتملك السلعة فعلياً قبل أن يبيعها للآمر</p>
          </div>
        </div>
      </div>

      {/* مثال عملي */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 ml-3 text-purple-600" />
          مثال عملي
        </h3>
        <div className="bg-purple-50 p-6 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
            دخل زبون إلى محل إلكترونيات لشراء هاتف.<br/>
            قال له البائع: "أنا اشتريت هذا الهاتف بـ60,000 دينار، وأبيعه لك بربح 6,000 دينار، يعني المجموع 66,000 دينار."<br/>
            وافق الزبون، وتم البيع.
          </p>
        </div>
      </div>
    </div>
  );

  const TaqsitContent = () => (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-12">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">البيع بالتقسيط</h2>
      </div>

      {/* التعريف */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="w-6 h-6 ml-3 text-teal-600" />
          التعريف
        </h3>
        <div className="bg-teal-50 p-6 rounded-xl">
          <p className="text-gray-700 leading-relaxed text-lg">
            هو بيع سلعة بثمن مؤجل يدفع على دفعات (أقساط) على فترات زمنية محددة، ويكون الثمن في هذه الحالة أعلى من الثمن الحال (النقدي)
          </p>
        </div>
      </div>

      {/* الشروط */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 ml-3 text-teal-600" />
          شروط البيع بالتقسيط
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
            <p className="text-gray-700">أن يكون المبيع مملوكاً للبائع وقت العقد</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
            <div>
              <p className="text-gray-700 font-semibold">أن يكون المبيع مقبوضاً للبائع:</p>
              <p className="text-gray-600 text-sm mt-1">لا يجوز بيع سلعة لم يستلمها البائع بعد</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
            <p className="text-gray-700">ألا يشترط البائع زيادة في الثمن إذا تأخر المشتري عن السداد</p>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">4</div>
            <div>
              <p className="text-gray-700 font-semibold">أن يكون الثمن في مقابل السلعة:</p>
              <p className="text-gray-600 text-sm mt-1">لا يجوز أن يكون البيع بالتقسيط مجرد حيلة لاقتراض المال بفائدة</p>
            </div>
          </div>
        </div>
      </div>

      {/* مثال عملي */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 ml-3 text-purple-600" />
          مثال عملي
        </h3>
        <div className="bg-purple-50 p-6 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
شراء سيارة قيمتها 1500.000 دينار نقدًا، ولكن بالتقسيط لمدة سنة يصبح سعرها 2000.000 ريال، ويسدد المشتري 50.000 دينار شهريًا.          </p>
        </div>
      </div>
    </div>
  );



  const SalamContent = () => (
  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
    <div className="text-center mb-12">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600">
        <BookOpen className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">السلم</h2>
    </div>

    {/* التعريف */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Info className="w-6 h-6 ml-3 text-purple-600" />
        التعريف
      </h3>
      <div className="bg-purple-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-relaxed text-lg">
          هو عقد بيع يقدِّم فيه المشتري (المسلم) الثمن نقدًا في مجلس العقد، على أن يسلّم البائع (المسلم إليه) السلعة موصوفة في الذمة مؤجَّلة في وقت معلوم.
        </p>
      </div>
    </div>

    {/* مثال توضيحي */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Star className="w-6 h-6 ml-3 text-purple-600" />
        مثال توضيحي
      </h3>
      <div className="bg-purple-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-relaxed text-lg">
          شخص يعطيك المال الآن لشراء 100 كغ من القمح تُسلِّمها له بعد 3 أشهر، أو التعاقد مع شخص لشراء سيارة بمواصفات معينة (نوعها وموديلها وسنة الصنع) مقابل دفع المبلغ مقدماً وتسليم السيارة في موعد متفق عليه.
        </p>
      </div>
    </div>

    {/* الشروط */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <CheckCircle className="w-6 h-6 ml-3 text-purple-600" />
        الشروط الشرعية
      </h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">دفع الثمن كاملاً في مجلس العقد</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">تعيين أجل محدد للتسليم</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">تعيين جنس ونوع وقدر وصفة السلعة</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">أن تكون السلعة مما يمكن ضبط صفاتها وتسليمها في المستقبل</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">لا يجوز أن تكون السلعة من الأشياء النادرة أو التي لا تتوفر عادة وقت التسليم</p>
        </div>
      </div>
    </div>

    {/* الفرق بين السلم وبيع ما لا يملك */}
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertCircle className="w-6 h-6 ml-3 text-orange-600" />
        الفرق بين السلم وبيع ما لا يملك
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
          <h4 className="font-bold text-gray-900 mb-3 text-green-800">السَّلَم (جائز)</h4>
          <p className="text-gray-700">بيع لشيء موصوف في الذمة مع دفع الثمن مقدماً، والمبيع ثابت في الذمة</p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3 text-red-800">بيع ما لا يملك ( غير جائز )</h4>
          <p className="text-gray-700">نهى عنه الرسول ﷺ "لا تبع ما ليس عندك" لأنه بيع لشيء غير مضمون الحصول</p>
        </div>
      </div>
    </div>
  </div>
);

const MudarabaContent = () => (
  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
    <div className="text-center mb-12">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600">
        <TrendingUp className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">المضاربة</h2>
      <p className="text-xl text-gray-600">المشاركة بالمضاربة</p>
    </div>

    {/* التعريف */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Info className="w-6 h-6 ml-3 text-green-600" />
        التعريف
      </h3>
      <div className="bg-green-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-relaxed text-lg">
          عقد شراكة بين طرفين: صاحب المال (ربّ المال) يقدّم رأس المال، والمضارب (عامل) يقدم العمل والخبرة. والربح يُقسَّم بينهما حسب النسبة المتفق عليها، والخسارة يتحمّلها رب المال إلا إذا كان هناك تقصير من العامل.
        </p>
      </div>
    </div>

    {/* أطراف المضاربة */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Users className="w-6 h-6 ml-3 text-green-600" />
        أطراف المضاربة
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-3">صاحب المال (ربّ المال)</h4>
          <p className="text-gray-700">يقدّم رأس المال ويتحمل الخسارة المالية في حال عدم تقصير العامل</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-3">المضارب (العامل)</h4>
          <p className="text-gray-700">يقدم العمل والخبرة والجهد في إدارة رأس المال واستثماره</p>
        </div>
      </div>
    </div>

    {/* الشروط */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <CheckCircle className="w-6 h-6 ml-3 text-green-600" />
        الشروط الشرعية
      </h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">رأس المال معلوم ومحدد</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">أن يكون رأس المال غير مضمون (معرض للنقص في حال الخسارة) وإلّا أصبح عقد قرض ربوي</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">نسبة الربح محددة ومعلومة من الربح لا من رأس المال (مثلاً: 60% للمستثمر، 40% للعامل)</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">أن يكون الربح مشتركاً، لا مبلغاً ثابتاً لأحد الطرفين</p>
        </div>
      </div>
    </div>

    {/* مثال توضيحي */}
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Star className="w-6 h-6 ml-3 text-green-600" />
        مثال توضيحي
      </h3>
      <div className="bg-green-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-relaxed text-lg">
          مستثمر يعطي 100,000 دج لتاجر ليستثمرها في التجارة الإلكترونية، والأرباح تُقسم بينهما حسب النسبة المتفق عليها مسبقاً.
        </p>
      </div>
    </div>
  </div>
);

const IstisnaContent = () => (
  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
    <div className="text-center mb-12">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <Wrench className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">الاستصناع</h2>
    </div>

    {/* تنبيه فقهي */}
    <div className="mb-12">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
          <AlertCircle className="w-5 h-5 ml-2 text-yellow-600" />
          تنبيه فقهي
        </h4>
        <p className="text-gray-700 leading-relaxed">
          ذهب الأئمة مالك والشافعي وأحمد إلى جعله بيع بالسّلَم، واشترطوا لصحته شروط السلم. أما الحنفية فقد جعله أكثرهم عقداً مغايراً للسلم فلا تجب فيه مراعاة شروطه وهذا هو رأي مجمع الفقه الإسلامي، والله أعلم.
        </p>
      </div>
    </div>

    {/* التعريف */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Info className="w-6 h-6 ml-3 text-orange-600" />
        التعريف
      </h3>
      <div className="bg-orange-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-relaxed text-lg">
          هو عقد على صناعة شيء موصوف في الذمة بمقابل (ثمن) يدفع عاجلاً أو آجلاً.
        </p>
      </div>
    </div>

    {/* الشروط */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <CheckCircle className="w-6 h-6 ml-3 text-orange-600" />
        الشروط الشرعية
      </h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">تحديد مواصفات الشيء المطلوب تحديداً يمنع التنازع والخصام عند التسليم</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">تحديد الثمن بوضوح (مقداراً وزمناً)</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">الاتفاق على الأجل</p>
        </div>
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700">لا يشترط أن يكون ما يأتي به العامل من صنعه هو إلا إذا اشترط المستصنع ذلك</p>
        </div>
      </div>
    </div>



    {/* أمثلة */}
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Star className="w-6 h-6 ml-3 text-orange-600" />
        أمثلة تطبيقية
      </h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-gray-700">التعاقد مع خياط لخياطة بدلة حسب مقاسك ومواصفات محددة</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-gray-700">الاتفاق مع مهندس لبناء بيت بمواد وصفات متفق عليها</p>
        </div>
      </div>
    </div>
  </div>
);


  const renderSelectedContent = () => {
    switch(selectedBuyou) {
      case 'murabaha': return <MurabahaContent />;
      case 'taqsit': return <TaqsitContent />;
      case 'musharaka': return <MudarabaContent />;
      case 'salam': return <SalamContent />;
      case 'istisna': return <IstisnaContent />;
      default: return <MurabahaContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-emerald-800">ميثاق</h1>
            </div>
            <nav className="flex items-center space-x-6 space-x-reverse">
             
                <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
                الرئيسية 
                </Link>
            
             
              <Link href="/transactions" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors">
                ابدأ الآن
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            دليل البيوع الشرعية
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            تعرف على أنواع البيوع المتوافقة مع الشريعة الإسلامية وأحكامها وتطبيقاتها العملية
          </p>
        </div>
      </section>

      {/* الشروط المشتركة لصحة البيع */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-700">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                الشروط المشتركة لصحة أي بيع
              </h2>
              <p className="text-xl text-gray-600">
                الأسس الشرعية العامة التي يجب توفرها في جميع البيوع
              </p>
            </div>

            <div className="space-y-12">
              {/* الصيغة */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold ml-3">1</div>
                  الصيغة
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    وهي إيجاب كبعت، وقبول كاشتريت، وما يقوم مقام الصيغة كالإشارة من الأبكم والأصم، ومجرد المناولة في المحقرات، وما علم الجميع أثمانه الثابتة من غيرها.
                  </p>
                </div>
              </div>

              {/* العاقدان */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold ml-3">2</div>
                  العاقدان
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    ويشترط فيهما الأهلية وهي أن يكونا عاقلين راشدين وراضين بالبيع.
                  </p>
                </div>
              </div>

              {/* المعقود عليه */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold ml-3">3</div>
                  المعقود عليه
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl mb-4">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    وهو المبيع والثمن ويشترط فيهما شروط نجملها في الآتي:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                      <p className="text-gray-700">أن يكونا موجودين فلا يصح بيع المعدوم ولا جعله ثمنا باتفاق الفقهاء، ولا خلاف بينهم في استثناء السلم فهو بيع صحيح مع أنه بيع لمعدوم.</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                      <p className="text-gray-700">أن يكونا طاهرين منتفعا بهما انتفاعا معتبرا شرعا.</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                      <p className="text-gray-700">أن يكون من يلي العقد مالكا أو نائبا عن المالك.</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">4</div>
                      <p className="text-gray-700">أن يكونا مقدورا على تسليم كل منهما.</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">5</div>
                      <p className="text-gray-700">أن يكونا معلومين للعاقدين.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* البيوع المنهي عنها */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 ml-3 text-red-600" />
                  البيوع المنهي عنها
                </h3>
                <div className="bg-red-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    مرجعها إلى ثلاثة أشياء:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                      <p className="text-gray-700">الربا بأنواعه</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                      <p className="text-gray-700">الغش والخداع</p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                      <p className="text-gray-700">الجهالة والتغرير</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyou3 Navigation - Using Flexbox */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <BuyouCard 
              id="murabaha"
              title="المرابحة" 
              icon={<Scale className="w-8 h-8" />}
              color="emerald"
              isSelected={selectedBuyou === 'murabaha'}
              onClick={() => setSelectedBuyou('murabaha')}
            />
            <BuyouCard 
              id="taqsit"
              title="البيع بالتقسيط" 
              icon={<CheckCircle className="w-8 h-8" />}
              color="teal"
              isSelected={selectedBuyou === 'taqsit'}
              onClick={() => setSelectedBuyou('taqsit')}
            />
            <BuyouCard 
              id="musharaka"
              title="المشاركة" 
              icon={<Users className="w-8 h-8" />}
              color="blue"
              isSelected={selectedBuyou === 'musharaka'}
              onClick={() => setSelectedBuyou('musharaka')}
            />
            <BuyouCard 
              id="salam"
              title="السلم" 
              icon={<BookOpen className="w-8 h-8" />}
              color="purple"
              isSelected={selectedBuyou === 'salam'}
              onClick={() => setSelectedBuyou('salam')}
            />
            <BuyouCard 
              id="istisna"
              title="الاستصناع" 
              icon={<Wrench className="w-8 h-8" />}
              color="orange"
              isSelected={selectedBuyou === 'istisna'}
              onClick={() => setSelectedBuyou('istisna')}
            />
          </div>
        </div>
      </section>

      {/* Selected Buyou Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSelectedContent()}
          
          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">جاهز لإنشاء عقد متوافق مع الشريعة؟</p>
          
              <Link href="/transactions" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 inline-flex items-center">
                إنشاء عقد جديد
                <ArrowRight className="w-5 h-5 mr-3" />
              </Link>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">ميثاق</h4>
            </div>
            <p className="text-gray-400 mb-8">
              منصة توثيق العقود المالية المتوافقة مع الشريعة الإسلامية
            </p>
            <p className="text-gray-500">&copy; 2025 ميثاق. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InformationPage;