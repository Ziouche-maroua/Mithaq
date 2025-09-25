import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, transactions }) {
    const handleDelete = (id, amount, type) => {
        if (confirm(`Are you sure you want to delete this ${type} transaction for $${amount}?`)) {
            router.delete(route('transactions.destroy', id));
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            draft: 'bg-gray-100 text-gray-800',
            pending: 'bg-yellow-100 text-yellow-800',
            approved: 'bg-blue-100 text-blue-800',
            rejected: 'bg-red-100 text-red-800',
            completed: 'bg-green-100 text-green-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transactions</h2>}
        >
            <Head title="Transactions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Transactions</h1>
                                <Link
                                    href={route('transactions.create')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Create New Transaction
                                </Link>
                            </div>

                            {transactions.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No transactions found.</p>
                                    <Link
                                        href={route('transactions.create')}
                                        className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                                    >
                                        Create your first transaction
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-2 px-4 border-b text-left">ID</th>
                                                <th className="py-2 px-4 border-b text-left">User</th>
                                                <th className="py-2 px-4 border-b text-left">Type</th>
                                                <th className="py-2 px-4 border-b text-left">Amount</th>
                                                <th className="py-2 px-4 border-b text-left">Status</th>
                                                <th className="py-2 px-4 border-b text-left">Date</th>
                                                <th className="py-2 px-4 border-b text-left">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.map((transaction) => (
                                                <tr key={transaction.id} className="hover:bg-gray-50">
                                                    <td className="py-2 px-4 border-b font-medium">
                                                        #{transaction.id}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        {transaction.user?.name || 'Unknown User'}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        {transaction.transaction_type?.name || 'Unknown Type'}
                                                    </td>
                                                    <td className="py-2 px-4 border-b font-semibold">
                                                        {transaction.currency} {parseFloat(transaction.amount).toLocaleString()}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <span className={`px-2 py-1 rounded-full text-xs capitalize ${getStatusColor(transaction.status)}`}>
                                                            {transaction.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b text-sm text-gray-600">
                                                        {formatDate(transaction.created_at)}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <div className="flex space-x-2">
                                                            <Link
                                                                href={route('transactions.show', transaction.id)}
                                                                className="text-blue-600 hover:text-blue-900 text-sm"
                                                            >
                                                                View
                                                            </Link>
                                                            {transaction.status === 'draft' && (
                                                                <>
                                                                    <Link
                                                                        href={route('transactions.edit', transaction.id)}
                                                                        className="text-green-600 hover:text-green-900 text-sm"
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                    <button
                                                                        onClick={() => handleDelete(
                                                                            transaction.id, 
                                                                            parseFloat(transaction.amount).toLocaleString(),
                                                                            transaction.transaction_type?.name
                                                                        )}
                                                                        className="text-red-600 hover:text-red-900 text-sm"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}