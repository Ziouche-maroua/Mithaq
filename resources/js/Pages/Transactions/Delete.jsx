import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Delete({ auth, transaction }) {
    const handleDelete = () => {
        router.delete(route('transactions.destroy', transaction.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800">Delete Transaction</h2>}
        >
            <Head title="Delete Transaction" />

            <div className="py-6">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h1 className="text-xl font-bold mb-4">Are you sure you want to delete this transaction?</h1>
                        <div className="mb-4">
                            <p><strong>Type:</strong> {transaction.transaction_type?.name}</p>
                            <p><strong>Amount:</strong> {transaction.currency} {transaction.amount}</p>
                            <p><strong>Status:</strong> {transaction.status}</p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
                            >
                                Delete
                            </button>
                            <Link
                                href={route('transactions.index')}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}