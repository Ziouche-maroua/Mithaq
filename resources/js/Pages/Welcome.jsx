import { Shield, BookOpen, Users, CheckCircle, Star } from 'lucide-react';
import { Link } from '@inertiajs/react';

function App() {
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
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
                المميزات
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">
                كيف يعمل
              </a>
              
              <Link href="/transactions" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors">
                ابدأ الآن
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              توثيق العقود المالية
              <span className="block mt-4 text-emerald-600">المتوافقة مع الشريعة</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              منصة لضمان شفافية المعاملات المالية الإسلامية 
              وحماية المستثمرين من الشبهات والربا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
              <Link  href={route('types.description')}  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
                استكشف العقود الحلال
              </Link>
              
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                شاهد كيف يعمل
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-6">المشكلة</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">العقود المالية  غامضة وغير واضحة</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">صعوبة معرفة ما إذا كان العقد يحتوي على ربا أو شبهة</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">عدم وجود رقابة شرعية موثقة ومفتوحة</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-6">الحل</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">عقود مُوثقة ومتوافقة مع الشريعة الإسلامية</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">شفافية</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">مراجعة تلقائية للشروط الشرعية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">مميزات المنصة</h3>
            <p className="text-xl text-gray-600">حلول للتمويل الإسلامي</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">حماية من الربا</h4>
              <p className="text-gray-600">
                نظام تدقيق تلقائي يضمن خلو جميع العقود من الربا والشبهات المالية
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">تعليم مالي إسلامي</h4>
              <p className="text-gray-600">
                مصادر تعليمية شاملة لفهم المفاهيم المالية الإسلامية وتطبيقها عملياً
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">مشاريع جماعية</h4>
              <p className="text-gray-600">
                تنظيم وإدارة المشاريع التشاركية مثل المشاركة والمرابحة بطريقة آمنة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">كيف يعمل ميثاق؟</h3>
            <p className="text-xl text-gray-600">عملية بسيطة وآمنة في 2 خطوات</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">إنشاء العقد</h4>
              <p className="text-gray-600">
                أنشئ عقدك المالي باستخدام القوالب المتوافقة مع الشريعة الإسلامية
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">المراجعة الشرعية</h4>
              <p className="text-gray-600">
                يتم فحص العقد تلقائياً للتأكد من توافقه مع أحكام الشريعة الإسلامية
              </p>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">متوافق مع الشريعة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="text-emerald-100">معاملات ربوية</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-emerald-100">شفافية كاملة</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            انضم إلى ثورة التمويل الإسلامي
          </h3>
          <p className="text-xl text-emerald-100 mb-10">
            كن جزءاً من المستقبل المالي المتوافق مع الشريعة الإسلامية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link  href="/transactions">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
              ابدأ مشروعك الآن
            </button>
            </Link>
            <Link  href={route('types.description')}  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              تعلم المزيد
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">ميثاق</h4>
              </div>
              <p className="text-gray-400">
                منصة توثيق العقود المالية المتوافقة مع الشريعة الإسلامية
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">المنصة</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">كيف يعمل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الدعم</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">التعلم</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">المالية الإسلامية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">البلوك تشين</a></li>
                <li><a href="#" className="hover:text-white transition-colors">العقود الذكية</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">الشركة</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ميثاق. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;