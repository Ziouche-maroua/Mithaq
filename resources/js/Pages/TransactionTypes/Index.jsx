import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, transactionTypes }) {
    const handleDelete = (id, name) => {
        if (confirm(`Are you sure you want to delete "${name}"?`)) {
            router.delete(route('transaction-types.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transaction Types</h2>}
        >
            <Head title="Transaction Types" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Transaction Types</h1>
                                <Link
                                    href={route('transaction-types.create')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Create New Type
                                </Link>
                            </div>

                            {transactionTypes.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No transaction types found.</p>
                                    <Link
                                        href={route('transaction-types.create')}
                                        className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                                    >
                                        Create your first transaction type
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-2 px-4 border-b text-left">Name</th>
                                                <th className="py-2 px-4 border-b text-left">Description</th>
                                                <th className="py-2 px-4 border-b text-left">Status</th>
                                                <th className="py-2 px-4 border-b text-left">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactionTypes.map((type) => (
                                                <tr key={type.id} className="hover:bg-gray-50">
                                                    <td className="py-2 px-4 border-b font-medium">
                                                        {type.name}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        {type.description || 'No description'}
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                                            type.is_active 
                                                                ? 'bg-green-100 text-green-800' 
                                                                : 'bg-red-100 text-red-800'
                                                        }`}>
                                                            {type.is_active ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <div className="flex space-x-2">
                                                            <Link
                                                                href={route('transaction-types.show', type.id)}
                                                                className="text-blue-600 hover:text-blue-900 text-sm"
                                                            >
                                                                View
                                                            </Link>
                                                            <Link
                                                                href={route('transaction-types.edit', type.id)}
                                                                className="text-green-600 hover:text-green-900 text-sm"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => handleDelete(type.id, type.name)}
                                                                className="text-red-600 hover:text-red-900 text-sm"
                                                            >
                                                                Delete
                                                            </button>
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