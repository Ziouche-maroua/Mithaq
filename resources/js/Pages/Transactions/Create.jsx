import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ auth, transactionTypes, users }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: '',
        transaction_type_id: '',
        amount: '',
        currency: 'DZD',
        status: 'draft',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('transactions.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800">Create Transaction</h2>}
        >
            <Head title="Create Transaction" />

            <div className="py-6">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">New Transaction</h1>
                            <Link
                                href={route('transactions.index')}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                            >
                                Back
                            </Link>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            {/* User */}
                           
                            {/* Transaction Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
                                <select
                                    value={data.transaction_type_id}
                                    onChange={(e) => setData('transaction_type_id', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select Type</option>
                                    {transactionTypes.map(type => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                                {errors.transaction_type_id && <p className="text-red-500 text-sm mt-1">{errors.transaction_type_id}</p>}
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                <input
                                    type="number"
                                    value={data.amount}
                                    onChange={(e) => setData('amount', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                            </div>

                            {/* Currency */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                                <input
                                    type="text"
                                    value={data.currency}
                                    onChange={(e) => setData('currency', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
{/* Status */}
                           {auth.user.is_admin && (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
        </select>
    </div>
)}
                            {/* Submit */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
