#  **ميثاق**



##  **نبذة عن المشروع**
مشروع **ميثاق** هو منصة تعليمية بسيطة تهدف إلى تعريف المستخدمين بالمعاملات المالية الإسلامية مثل **المرابحة المضاربة ..**، وتوضيح شروطها وأمثلتها بطريقة تفاعلية.  

يمكن للمستخدم الاطلاع على الأنواع المختلفة من المعاملات، ثم تجربة **محاكاة معاملة مالية** بإدخال بياناتها للحصول على نتيجة توضّح ما إذا كانت **صحيحة شرعًا** أم لا.



## ⚙️ **التقنيات المستعملة**
|  التقنية | الاستعمال |
|-------------|--------------|
| **Laravel** | الإطار الخلفي (Backend) |
| **React + Inertia.js** | الواجهة الأمامية (Frontend) |
| **Docker** | لتشغيل المشروع بدل XAMPP |
| **MySQL** | قاعدة البيانات |



##  **طريقة العمل**
1.  **الاطلاع** على أنواع المعاملات المالية الإسلامية من الصفحة التعليمية.  
2.  **إدخال تفاصيل معاملة تجريبية** عبر واجهة تفاعلية بسيطة.  
3.  **التحقق** من المعاملة بناءً على الشروط المعرفّة مسبقًا في النظام.  
4.  **عرض النتيجة** للمستخدم مع تفسير مختصر وواضح.



## 📂 **بنية المشروع (مختصرة)**
```bash
mithaq/
 ├── app/
 │    ├── Models/
 │    ├── Http/Controllers/
 ├── resources/js/Pages/
 │    ├── Home.jsx
 │    ├── Transactions/
 │    └── TransactionTypes/
 ├── docker-compose.yml
 └── README.md
```
---
#  **Mithaq : Islamic Finance Learning Platform**



##  **Project Overview**
**Mithaq** is a simple educational platform that introduces users to **Islamic financial transactions** such as *Murabaha*, *Ijara*, and *Mudaraba*.  

Users can explore different transaction types, learn their main principles, and **simulate** their own transaction ideas to check if they align with **Islamic finance guidelines**.



##  **Technologies Used**
|  Technology |  Purpose |
|----------------|-------------|
| **Laravel** | Backend framework |
| **React + Inertia.js** | Frontend interface |
| **Docker** | Development environment |
| **MySQL** | Database |


##  **Workflow**
1.  **Explore:** Users browse educational content about Islamic transaction types.  
2.  **Simulate:** Users fill out a form describing their own transaction scenario.  
3.  **Validate:** The system checks the input based on simple predefined conditions.  
4.  **Result:** A validation message and explanation are displayed clearly to the user.

   
## 🧷 **How to Run Locally**

### 🐳 **Start the project**
```bash
# 1️⃣ Build and start Docker containers
docker-compose up -d --build

# 2️⃣ Access the Laravel app
http://localhost:8000
