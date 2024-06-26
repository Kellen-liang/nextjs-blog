import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { promises as fs } from 'fs';

export default async function Page() {
  
  async function  action(formData: FormData) {
    'use server';
    const file = formData.get('file') as File;
    if(!file || file.size === 0) {
      return { error: 'No file uploaded' };
    } 

    const data = await file.arrayBuffer();
    
    await fs.writeFile(`${process.cwd()}/tmp/${file.name}`, Buffer.from(data));
  }

  return  (
    <div>
      <form action={action}>
        <Input type='file' name='file' accept='.png' />
        <Button>Upload</Button>
      </form>
    </div>
  );
}