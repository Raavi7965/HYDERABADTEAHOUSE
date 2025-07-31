
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchResults = [
  { id: 1, name: 'Royal Assam Black Tea', category: 'Black Tea', price: '₹450' },
  { id: 2, name: 'Himalayan Darjeeling', category: 'Black Tea', price: '₹650' },
  { id: 3, name: 'Hyderabadi Chai Masala', category: 'Chai Masala', price: '₹350' },
  { id: 4, name: 'Wellness Green Tea', category: 'Green Tea', price: '₹400' },
  { id: 5, name: 'Earl Grey Premium', category: 'Black Tea', price: '₹500' },
  { id: 6, name: 'Chamomile Herbal Tea', category: 'Herbal', price: '₹300' },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResults = searchResults.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for teas, blends, or accessories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {searchQuery && (
              <div className="space-y-2">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => {
                        console.log(`Selected: ${item.name}`);
                        onClose();
                      }}
                    >
                      <div>
                        <h4 className="font-medium text-tea-darkBrown">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <span className="font-bold text-tea-brown">{item.price}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No products found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
            
            {!searchQuery && (
              <div className="text-center py-8 text-gray-500">
                Start typing to search for products...
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
