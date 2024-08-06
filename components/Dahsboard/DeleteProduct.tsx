'use client'

import { XCircleIcon } from '@heroicons/react/24/outline';
import { deleteProduct } from '../../services/queries/products';
import * as AlertDialog from '@radix-ui/react-alert-dialog';



 export function DeleteProduct({ product, refetch }: { product: Product, refetch: Function }) {

    async function handleDeleteProduct(productId: number) {
        await deleteProduct(productId);
        refetch();
      }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button>
            <XCircleIcon
              className="flex-shrink-0 h-6 w-6 text-red-400 cursor-pointer"
              aria-hidden="true"
            />
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="bg-background/80 data-[state=open]:animate-overlayShow fixed inset-0 z-10" />
          <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-lightGreen p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-10">
            <AlertDialog.Title className=" m-0 text-[17px] font-medium">
              Are you completely sure?
            </AlertDialog.Title>
            <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
              This action cannot be undone. The product <b>{product.name}</b>{" "}
              will permanently delete and remove data from our servers.
            </AlertDialog.Description>
            <div className="flex justify-end gap-[25px]">
              <AlertDialog.Cancel asChild>
                <button className="text-white bg-red-400 hover:bg-red-500 focus:shadow-red-700 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-buttonGreen hover:bg-hoverGreen text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                >
                  Yes, delete Product
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}
