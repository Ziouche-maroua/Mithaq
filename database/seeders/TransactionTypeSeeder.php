<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TransactionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $transactionTypes = [
            [
                'name' => 'Murabaha',
                'description' => 'يقصد بها أن يبيع التاجر السلعة للمشتري بالثمن الذي اشتراها به وبزيادة عليه وهذه الزيادة هي الربح',
                'rules_template' => json_encode([
                    'first_contract_validity' => [
                        'required' => true,
                        'description' => 'أن يكون العقد الأول صحيحا فإن كان فاسدا لم يجز البيع بالمرابحة'
                    ],
                    'original_price_known' => [
                        'required' => true,
                        'description' => 'أن يكون الثمن الأول معلوما للمشتري الثاني'
                    ],
                    'capital_fungible' => [
                        'required' => true,
                        'description' => 'أن يكون رأس المال من ذوات الأمثال أي التي لها مثيل في السوق'
                    ],
                    'profit_known' => [
                        'required' => true,
                        'description' => 'أن يكون الربح معلوما'
                    ],
                    'no_riba_exchange' => [
                        'required' => true,
                        'description' => 'أن لا يكون الثمن في العقد الأول مقابلا بجنسه من أموال الربا'
                    ]
                ]),
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name' => 'Taqsit',
                'description' => 'هو بيع سلعة بثمن مؤجل يدفع على دفعات (أقساط) على فترات زمنية محددة، ويكون الثمن في هذه الحالة أعلى من الثمن الحال (النقدي)',
                'rules_template' => json_encode([
                    'seller_ownership' => [
                        'required' => true,
                        'description' => 'أن يكون المبيع مملوكاً للبائع وقت العقد'
                    ],
                    'possession_required' => [
                        'required' => true,
                        'description' => 'أن يكون المبيع مقبوضاً للبائع - لا يجوز بيع سلعة لم يستلمها البائع بعد'
                    ],
                    'no_penalty_increase' => [
                        'required' => true,
                        'description' => 'ألا يشترط البائع زيادة في الثمن إذا تأخر المشتري عن السداد'
                    ],
                    'price_for_goods' => [
                        'required' => true,
                        'description' => 'أن يكون الثمن في مقابل السلعة - لا يجوز أن يكون البيع بالتقسيط مجرد حيلة لاقتراض المال بفائدة'
                    ]
                ]),
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name' => 'Salam',
                'description' => 'هو عقد بيع يقدِّم فيه المشتري (المسلم) الثمن نقدًا في مجلس العقد، على أن يسلّم البائع (المسلم إليه) السلعة موصوفة في الذمة مؤجَّلة في وقت معلوم',
                'rules_template' => json_encode([
                    'full_payment_upfront' => [
                        'required' => true,
                        'description' => 'دفع الثمن كاملاً في مجلس العقد'
                    ],
                    'delivery_date_specified' => [
                        'required' => true,
                        'description' => 'تعيين أجل محدد للتسليم'
                    ],
                    'goods_fully_described' => [
                        'required' => true,
                        'description' => 'تعيين جنس ونوع وقدر وصفة السلعة'
                    ],
                    'deliverable_goods' => [
                        'required' => true,
                        'description' => 'أن تكون السلعة مما يمكن ضبط صفاتها وتسليمها في المستقبل'
                    ],
                    'commonly_available' => [
                        'required' => true,
                        'description' => 'لا يجوز أن تكون السلعة من الأشياء النادرة أو التي لا تتوفر عادة وقت التسليم'
                    ]
                ]),
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name' => 'Mudaraba',
                'description' => 'عقد شراكة بين طرفين: صاحب المال (ربّ المال) يقدّم رأس المال، والمضارب (عامل) يقدم العمل والخبرة. والربح يُقسَّم بينهما حسب النسبة المتفق عليها، والخسارة يتحمّلها رب المال إلا إذا كان هناك تقصير من العامل',
                'rules_template' => json_encode([
                    'capital_known_defined' => [
                        'required' => true,
                        'description' => 'رأس المال معلوم ومحدد'
                    ],
                    'capital_not_guaranteed' => [
                        'required' => true,
                        'description' => 'أن يكون رأس المال غير مضمون (معرض للنقص في حال الخسارة) وإلّا أصبح عقد قرض ربوي'
                    ],
                    'profit_percentage_known' => [
                        'required' => true,
                        'description' => 'نسبة الربح محددة ومعلومة من الربح لا من رأس المال'
                    ],
                    'shared_profit' => [
                        'required' => true,
                        'description' => 'أن يكون الربح مشتركاً، لا مبلغاً ثابتاً لأحد الطرفين'
                    ]
                ]),
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name' => 'Istisna',
                'description' => 'هو عقد على صناعة شيء موصوف في الذمة بمقابل (ثمن) يدفع عاجلاً أو آجلاً',
                'rules_template' => json_encode([
                    'detailed_specifications' => [
                        'required' => true,
                        'description' => 'تحديد مواصفات الشيء المطلوب تحديداً يمنع التنازع والخصام عند التسليم'
                    ],
                    'price_clearly_defined' => [
                        'required' => true,
                        'description' => 'تحديد الثمن بوضوح (مقداراً وزمناً)'
                    ],
                    'timeline_agreed' => [
                        'required' => true,
                        'description' => 'الاتفاق على الأجل'
                    ],
                    'production_flexibility' => [
                        'required' => false,
                        'description' => 'لا يشترط أن يكون ما يأتي به العامل من صنعه هو إلا إذا اشترط المستصنع ذلك'
                    ]
                ]),
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ];

        DB::table('transaction_types')->insert($transactionTypes);
    }
}