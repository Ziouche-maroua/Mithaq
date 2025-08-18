import { Shield, Plus, Clock, CheckCircle, AlertTriangle, FileText, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import { useState } from 'react';

function TransactionsPage() {
  const [activeTab, setActiveTab] = useState('create');
  const [selectedContractType, setSelectedContractType] = useState('');
  const [formData, setFormData] = useState({
    contractType: '',
    amount: '',
    duration: '',
    description: '',
    partnerAddress: ''
  });

  const contractTypes = [
    {
      id: 'murabaha',
      name: 'مرابحة',
      description: 'بيع السلعة بالتكلفة مع ربح معلوم',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      id: 'musharaka',
      name: 'مشاركة',
      description: 'شراكة في رأس المال والربح والخسارة',
      icon: Users,
      color: 'blue'
    },
    {
      id: 'mudaraba',
      name: 'مضاربة',
      description: 'استثمار المال مقابل نسبة من الربح',
      icon: DollarSign,
      color: 'purple'
    }
  ];

  const sampleTransactions = [
    {
      id: '0x1a2b3c...',
      type: 'مرابحة',
      amount: '50,000',
      status: 'مكتمل',
      date: '2025-08-15',
      partner: 'أحمد محمد',
      verified: true
    },
    {
      id: '0x4d5e6f...',
      type: 'مشاركة',
      amount: '100,000',
      status: 'قيد المراجعة',
      date: '2025-08-17',
      partner: 'شركة التطوير',
      verified: false
    },
    {
      id: '0x7g8h9i...',
      type: 'مضاربة',
      amount: '25,000',
      status: 'نشط',
      date: '2025-08-10',
      partner: 'فاطمة علي',
      verified: true
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color] || colors.emerald;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'مكتمل': 'bg-green-100 text-green-800',
      'نشط': 'bg-blue-100 text-blue-800',
      'قيد المراجعة': 'bg-yellow-100 text-yellow-800',
      'مرفوض': 'bg-red-100 text-red-800'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your smart contract
    alert('تم إرسال العقد للمراجعة الشرعية!');
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
              <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                الرئيسية
              </button>
              <button className="text-emerald-600 font-semibold">
                المعاملات
              </button>
              <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                التعلم
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">إدارة المعاملات</h2>
          <p className="text-gray-600">إنشاء ومتابعة عقودك المالية المتوافقة مع الشريعة</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse">
              <button
                onClick={() => setActiveTab('create')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'create'
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                إنشاء عقد جديد
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'history'
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                سجل المعاملات
              </button>
            </nav>
          </div>
        </div>

        {/* Create Contract Tab */}
        {activeTab === 'create' && (
          <div className="space-y-8">
            {/* Contract Types */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">اختر نوع العقد</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contractTypes.map((contract) => (
                  <button
                    key={contract.id}
                    onClick={() => {
                      setSelectedContractType(contract.id);
                      setFormData({...formData, contractType: contract.id});
                    }}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      selectedContractType === contract.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 bg-white hover:border-emerald-300'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(contract.color)}`}>
                      <contract.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{contract.name}</h4>
                    <p className="text-sm text-gray-600 text-right">{contract.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Contract Form */}
            {selectedContractType && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">تفاصيل العقد</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        المبلغ (بالدولار)
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-right"
                        placeholder="أدخل المبلغ"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        مدة العقد (بالأشهر)
                      </label>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-right"
                        placeholder="أدخل المدة"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      عنوان الشريك (Wallet Address)
                    </label>
                    <input
                      type="text"
                      name="partnerAddress"
                      value={formData.partnerAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-left"
                      placeholder="0x..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      وصف العقد
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-right"
                      placeholder="اكتب وصفاً مفصلاً للعقد..."
                      required
                    ></textarea>
                  </div>

                  {/* Sharia Compliance Check */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-emerald-800">فحص الامتثال الشرعي</h4>
                        <p className="text-sm text-emerald-700">سيتم فحص هذا العقد تلقائياً للتأكد من توافقه مع أحكام الشريعة الإسلامية</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Plus className="w-5 h-5" />
                    <span>إنشاء العقد</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Transaction History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">إجمالي المعاملات</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">معاملات نشطة</p>
                    <p className="text-2xl font-bold text-blue-600">3</p>
                  </div>
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">معاملات مكتملة</p>
                    <p className="text-2xl font-bold text-green-600">8</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">إجمالي القيمة</p>
                    <p className="text-2xl font-bold text-emerald-600">$500K</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">سجل المعاملات</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        معرف العقد
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        نوع العقد
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        المبلغ
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الشريك
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        التوافق الشرعي
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        التاريخ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-mono text-gray-900">
                            {transaction.id}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">
                            {transaction.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            ${transaction.amount}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {transaction.partner}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {transaction.verified ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Clock className="w-5 h-5 text-yellow-500" />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
}

export default TransactionsPage;