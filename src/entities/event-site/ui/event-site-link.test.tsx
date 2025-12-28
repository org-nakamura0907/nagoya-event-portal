import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { EventSiteLink } from './event-site-link';
import type { EventSite } from '../model';

afterEach(() => {
  cleanup();
});

describe('EventSiteLink', () => {
  const mockSite: EventSite = {
    id: 'test-site',
    title: 'Test',
    genre: 'お笑い',
    makeSearchUrl: vi.fn(() => 'https://example.com/search?q=nagoya'),
  };

  it('サイト名が含まれたテキストが正しくレンダリングされること', () => {
    render(<EventSiteLink site={mockSite} />);

    expect(screen.getByText('Testで探す')).toBeInTheDocument();
  });

  it('makeSearchUrlが実行され、正しいURLがhrefにセットされていること', () => {
    render(<EventSiteLink site={mockSite} />);

    const linkElement = screen.getByRole('link');

    expect(mockSite.makeSearchUrl).toHaveBeenCalled();
    expect(linkElement).toHaveAttribute('href', 'https://example.com/search?q=nagoya');
  });

  it('外部リンク用のセキュリティ属性が付与されていること', () => {
    render(<EventSiteLink site={mockSite} />);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
